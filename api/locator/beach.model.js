'use strict';

const mongoose = require('mongoose');
const search = require('mongoose-text-search');

let BeachLocationSchema = mongoose.Schema({

  location: String,
  spotId: Number,
  loc:    {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number]}
  },
  latitude: Number,
  longitude: Number,
  country: String

});

BeachLocationSchema.plugin(search);

BeachLocationSchema.index({loc: '2dsphere'});
BeachLocationSchema.index({location: 'text', country: 'text'});

let BeachLocationModel = mongoose.model('BeachLocation', BeachLocationSchema);

module.exports = BeachLocationModel;