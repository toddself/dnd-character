'use strict';

var Backbone = require('backbone');
var dataStore = require('data-store');

var Size = Backbone.Model.extend({
  urlRoot: '/size',
  defaults: {
    size: '',
    modifier: 0,
    grapple: 0,
    hide: 0,
    reachLength: 5,
    reachHeight: 5
  }
});

Size.prototype.sync = dataStore(Size);

module.exports = Size;