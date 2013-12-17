'use strict';

var mongoSync = require('backbone-mongo');

module.exports = function(model){
  var url = model.prototype.urlRoot;
  model.urlRoot = ['mongodb://localhost:27017', url].join('');
  return mongoSync.sync(model);
};