'use strict';

var httpSync = require('backbone-http');

module.exports = function(Model){
  return httpSync.sync(Model);
};