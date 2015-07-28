'use strict';

const locatorRoutes = require('../locator/beach.router');
const statusRoutes = require('../status/status.router');

module.exports = function(app) {

  app.use(locatorRoutes.routes());
  app.use(statusRoutes.routes());

};

