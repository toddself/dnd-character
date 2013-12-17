'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var Armor = require('./armor');

var ArmorSet = Backbone.Model.extend({
  urlRoot: '/armorset',

  schema: {
    body: function(){
      return ['hasOne', Armor];
    },
    shield: function(){
      return ['hasOne', Armor];
    }
  }
});

ArmorSet.prototype.sync = dataStore(ArmorSet);

module.exports = ArmorSet;