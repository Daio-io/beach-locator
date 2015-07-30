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

exports.beachById = function *() {
  
  let spot_id = this.params.spotid;
  let query = BeachModel.find({spotId: spot_id}, searchFields)
    .cache();
  
  this.body = yield query.exec();

};