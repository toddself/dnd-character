'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');

var Language = Backbone.Model.extend({
  urlRoot: '/language',
  defaults: {
    name: '',
    description: ''
  }
});

Language.prototype.sync = dataStore(Language);

module.exports = Language;
