'use strict';

const tooly = require('tooly');
const BeachModel = require('./beach.model');
const returnFields = '-_id -__v';
const emptyResponse = { status: 'no results', response: [] };

exports.locateBeach = function *() {

  if (tooly.existy(this.query.q)) {

    let safeSearch = tooly.cleansey(this.query.q);
    let query = BeachModel
      .find({ $text: { $search: safeSearch} }, returnFields)
      .cache();

    let data = yield query.exec();

    this.body = _buildResponse(data);
  } else {
    this.body = emptyResponse;
  }

};

exports.beachById = function *() {

  let spot_id = this.params.spotid;
  let query = BeachModel
    .find({spotId: spot_id}, returnFields)
    .cache();
  
  let data  = yield query.exec();

  this.body = _buildResponse(data);

};

function _buildResponse(resultData) {

  if (resultData.length > 0) {
    return { response: resultData, status :'success'};
  }
  return emptyResponse;
}