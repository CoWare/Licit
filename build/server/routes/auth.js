'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = _express2.default.Router();

auth.post('/signup', function (req, res, next) {
  res.send('signup');
});

auth.post('/login', function (req, res, next) {
  res.send('login');
});

auth.post('/signin', function (req, res, next) {
  res.send('signin');
});

exports.default = auth;