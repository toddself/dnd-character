'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');

var Race = Backbone.Model.extend({
  urlRoot: '/race'
});

Race.prototype.sync = dataStore(Race);

module.exports = Race;
