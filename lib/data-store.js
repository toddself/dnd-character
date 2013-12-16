'use strict';

var mongoSync = require('backbone-mongo');

module.exports = function(Model){
  Model.urlRoot = ['mongodb://localhost:27017', Model.urlRoot].join('');
  return mongoSync.sync(Model);
};