'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var Weapon = require('./weapon');

var WeaponSet = Backbone.Model.extend({
  urlRoot: '/weaponset',

  schema: {
    leftHand: function(){
      return ['hasOne', Weapon];
    },
    rightHand: function(){
      return ['hasOne', Weapon];
    }
  }
});

WeaponSet.prototype.sync = dataStore(WeaponSet);

module.exports = WeaponSet;