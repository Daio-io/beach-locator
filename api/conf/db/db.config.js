'use strict';

module.exports = {

  dev: {
    connectionString: 'mongodb://localhost/beachy',

    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    },     
    cache: {
      max: 0,
      maxAge: 0
    }
  },

  prod: {
    connectionString: process.env.DB_CONNECTION,

    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    },
    cache: {
      max: 50,
      maxAge: 1000 * 60 * 5
    }
  }

};

