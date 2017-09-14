'use strict';
const ENV = process.env.NODE_ENV || 'development';
const configs = require(`../config/${ENV}`);

export const mongo = {
  host: process.env.MONGODB_HOST || configs.mongo.host,
  port: process.env.MONGODB_PORT || configs.mongo.port,
  database: process.env.MONGODB_DATABASE || configs.mongo.database
}

export const server = {
  port: process.env.PORT || configs.server.port
}

export const webs = {
  host: process.env.WEBS_HOST || configs.webs.host,
  port: process.env.WEBS_PORT || configs.webs.port
}

