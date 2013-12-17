'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var Item = require('./inventory');
var Armor = require('./armor');
var Weapon = require('./weapon');

var InventorySet = Backbone.Model.extend({
  urlRoot: '/inventorset',

  schema: {
    weapon: function(){
      return ['manyToMany', Weapon];
    },
    armor: function(){
      return ['manyToMany', Armor];
    },
    item: function(){
      return ['manyToMany', Item];
    }
  }
});

InventorySet.prototype.sync = dataStore(InventorySet);

module.exports = InventorySet;