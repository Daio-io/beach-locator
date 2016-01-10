'use strict';

const beachHandlers = require('./beach.handlers');
const router = require('koa-router')();
const caching = require('../middleware/app.cache');
const params = require('../middleware/params');

router.get('/location', caching.setCache, params.validateGeoParams, beachHandlers.locateBeach);
router.get('/location/:search', caching.setCache, beachHandlers.beachBySearch);

module.exports = router;