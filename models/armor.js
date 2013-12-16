'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');

var Armor = Backbone.Model.extend({
  urlRoot: '/armor',

  defaults: {
    acBonus: 1,
    maxDexBonus: 8,
    armorCheckPenalty: 0,
    arcaneFailurePercentage: 5,
    maxSpeed30: 30,
    maxSpeed20: 20,
    weight: 0
  }
});

Armor.prototype.sync = dataStore(Armor);

module.exports = Armor;
