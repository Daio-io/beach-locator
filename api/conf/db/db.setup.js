'use strict';

var mongoose = require('mongoose');
var config = require('./db.config');
var cache = require('mongoose-cache');

module.exports = function() {
  
  switch (process.env.NODE_ENV) {
    case 'live':
      cache.install(mongoose, config.prod.cache);
      mongoose.connect(config.prod.connectionString, config.prod.options);
      break;

    default:
      cache.install(mongoose, config.dev.cache);
      mongoose.connect(config.dev.connectionString, config.dev.options);
      break;

  }

};