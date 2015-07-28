'use strict';

const tooly = require('tooly');
const BeachModel = require('./beach.model');
const searchFields = '-_id location spotId latitude longitude country';

exports.locateBeach = function *() {

  if (tooly.existy(this.query.q)) {

    let safeSearch = tooly.cleansey(this.query.q);

    let query = BeachModel
      .find({ $text: { $search: safeSearch} }, searchFields)
      .cache();

    this.body = yield query.exec();

  } else {
    this.body = [];
  }

};