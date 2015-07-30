'use strict';

const mongoose = require('mongoose');
const config = require('./db.config');
const cache = require('mongoose-cache');

module.exports = function() {
  
  switch (process.env.NODE_ENV) {
    case 'production':
      cache.install(mongoose, config.prod.cache);
      mongoose.connect(config.prod.connectionString, config.prod.options);
      break;

    default:
      cache.install(mongoose, config.dev.cache);
      mongoose.connect(config.dev.connectionString, config.dev.options);
      break;

  }

};