'use strict';

const tooly = require('tooly');

exports.validateGeoParams = function*(next) {

  let params = this.query;

  if (tooly.existy(params.lat) && tooly.existy(params.long)) {
    yield next;
  } else {
    this.body = {status: 'failed', message: 'You must provide both lat and long query params', response: []}
  }

};