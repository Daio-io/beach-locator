'use strict';

var locatorRoutes = require('../locator/beach.router');

module.exports = function(app) {

  app.use(locatorRoutes.routes());

};

