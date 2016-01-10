'use strict';

const emptyResponse = { status: 'empty', response: [], message: 'No results found for search'};
const queryFactory = require('./query.factory');
const tooly = require('tooly');

exports.locateBeach = function *() {

  let query = queryFactory.searchByGeo(this.query);

  let data = yield query.exec();

  this.body = _buildResponse(data);

};

exports.beachBySearch = function *() {

  let search = this.params.search;
  if (tooly.inty(search) === 0) {

    let query = queryFactory.searchByText(search);

    let data = yield query.exec();

    this.body = _buildResponse(data);

  } else {

    let query = queryFactory.searchById(search);

    let data = yield query.exec();

    this.body = _buildResponse(data);
  }

};

function _buildResponse(data) {

  if (data.length > 0) {
    let mapped = data.map(function(item) {
      return {
        location: item.location,
        spotId: item.spotId,
        country: item.country,
        coords: {
          lat : item.loc.coordinates[1],
          long : item.loc.coordinates[0]
        }
      }
    });

    return { response: mapped, status: 'success', message : 'Location search successful'};
  }
  return emptyResponse;
}