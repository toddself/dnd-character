'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var validate = require('backbone.validator');

var weaponTypes = require('../data/weapon-types');

var Weapon = Backbone.Model.extend({
  urlRoot: '/weapon',

  validators:{
    type: {
      inList: weaponTypes
    }
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
  }
});

Weapon.prototype.validate = validate;
Weapon.prototype.sync = dataStore(Weapon);

module.exports = Weapon;
