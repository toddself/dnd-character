'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var Weapon = require('./weapon');

var WeaponSet = Backbone.Model.extend({
  schema: {

  }
});

WeaponSet.prototype.sync = dataStore(WeaponSet);

module.exports = WeaponSet;