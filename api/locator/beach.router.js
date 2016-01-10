'use strict';

const beachHandlers = require('./beach.handlers');
const router = require('koa-router')();
const caching = require('../middleware/app.cache');

router.get('/location', caching.setCache, beachHandlers.locateBeach);
router.get('/location/:spotid', caching.setCache, beachHandlers.beachById);

module.exports = router;