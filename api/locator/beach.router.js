'use strict';

const beachHandlers = require('./beach.handlers');
const router = require('koa-router')();

router.get('/location', beachHandlers.locateBeach);
router.get('/location/:spotid', beachHandlers.beachById);

module.exports = router;