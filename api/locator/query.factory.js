'use strict';

const tooly = require('tooly');
const BeachModel = require('./beach.model');
const returnFields = '-_id -__v';
const defaultDistance = 10000;

function _textSearch(query) {
  let safeSearch = tooly.cleansey(query);
  return BeachModel
    .find({ $text: { $search: safeSearch, $caseSensitive: true} }, returnFields)
    .cache();
}

function _idSearch(id) {
  return BeachModel
    .find({spotId: id}, returnFields)
    .cache();
}

function _geoSearch(geoData) {
  let lat = tooly.floaty(geoData.lat);
  let lon = tooly.floaty(geoData.long);

  let distance = tooly.defaulty(geoData.dist, defaultDistance);

  let maxDistance = tooly.inty(distance);

  return BeachModel.find(
    {
      loc: {
        $near: {
          $geometry: {
            type: "Point", coordinates: [ lon, lat ]
          }, $maxDistance: maxDistance }
      }
    }, returnFields).cache();
}


module.exports = {
 searchByGeoQuery: _geoSearch,
 searchByIdQuery: _idSearch,
 searchByTextQuery: _textSearch
};