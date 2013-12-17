'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');

var Feat = Backbone.Model.extend({
  urlRoot: '/feat',
  defaults: {
    name: '',
    description: ''
  }
});

Feat.prototype.sync = dataStore(Feat);

module.exports = Feat;
