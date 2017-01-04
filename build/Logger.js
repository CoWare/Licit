'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tracer = require('tracer');

var _tracer2 = _interopRequireDefault(_tracer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// format tracer logger
var Logger = _tracer2.default.colorConsole({
  format: ['[{{timestamp}}] [{{title}}] {{message}} (in {{file}}:{{line}})', {
    error: '[{{timestamp}}] [{{title}}] {{message}} ' + '(in [{{file}}]:[{{line}}])\nCall Stack:\n[{{stack}}]'
  }]
});

exports.default = Logger;