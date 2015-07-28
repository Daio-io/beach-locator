'use strict';

var dbSetup = require('./db/db.setup');
var cors = require('koa-cors');

module.exports = function(app) {

  dbSetup();
  app.use(cors());

};