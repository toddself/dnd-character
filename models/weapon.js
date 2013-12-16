'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var constrain = require('../lib/constrain');

var weaponTypes = require('../data/weapon-types');

var Weapon = Backbone.Model.extend({
  urlRoot: '/weapon',

  constraints: {
    type: weaponTypes
  },

  defaults: {
    name: '',
    type: '',
    damageSmall: 0,
    damageMedium: 0,
    criticalBonus: 0,
    criticalRange: 20,
    rangeIncrement: 0,
    weight: 0,
    usesAmmo: false,
    isAmmo: false,
    ammoLeft: 0
  },

  schema: {
    ammo: function(){
      return ['hasOne', Weapon];
    }
  },

  initialize: function(){
    this.on('change', this._constrain, this);
  },

  _constrain: constrain
});

Weapon.prototype.sync = dataStore(Weapon);

module.exports = Weapon;
