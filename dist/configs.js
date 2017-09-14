'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENV = process.env.NODE_ENV || 'development';
var configs = require('../config/' + ENV);

var mongo = exports.mongo = {
  host: process.env.MONGODB_HOST || configs.mongo.host,
  port: process.env.MONGODB_PORT || configs.mongo.port,
  database: process.env.MONGODB_DATABASE || configs.mongo.database
};

var server = exports.server = {
  port: process.env.PORT || configs.server.port
};
//# sourceMappingURL=configs.js.map