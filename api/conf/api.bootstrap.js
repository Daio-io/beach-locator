'use strict';

const dbSetup = require('./db/db.setup');
const cors = require('koa-cors');

module.exports = function(app) {

  dbSetup();
  app.use(cors());

};