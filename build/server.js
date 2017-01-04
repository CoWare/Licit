'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Logger = require('./Logger.js');

var _Logger2 = _interopRequireDefault(_Logger);

require('dotenv/config');

var _index = require('./server/routes/index.js');

var _index2 = _interopRequireDefault(_index);

var _auth = require('./server/routes/auth.js');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Import app routes
 */
var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

/**
 * Setup route middlewares.
 */
app.use('/', _index2.default);
app.use('/auth', _auth2.default);

/**
 * Error handler
 */
app.use(function (err, req, res, next) {
  _Logger2.default.error('error: ' + err.message);
  res.status(err.code || 500).json({ error: err.reason });
  next();
});

var port = process.env.PORT || 3000;

app.listen(port, function (err) {
  if (err) {
    _Logger2.default.error('App failed to start.\n' + err);
  }
  _Logger2.default.info('App started on port ' + port);
});