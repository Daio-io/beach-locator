'use strict';

const beachHandlers = require('./beach.handlers');
const router = require('koa-router')();

router.get('/location', beachHandlers.locateBeach);

module.exports = router;