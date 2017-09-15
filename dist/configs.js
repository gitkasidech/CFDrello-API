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

var webs = exports.webs = {
  host: process.env.WEBS_HOST || configs.webs.host,
  port: process.env.WEBS_PORT || configs.webs.port
};
//# sourceMappingURL=configs.js.map