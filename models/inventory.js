'use strict';

var Backbone = require('Backbone');
var dataStore = require('data-store');
var inventoryTypes = require('../data/inventory-types');

var Inventory = Backbone.Model.extend({
  urlRoot: '/inventory',

  constraints: {
    type: inventoryTypes
  },

  defaults: {
    name: '',
    type: '',
    description: '',
    weight: '',
    size: '',
    hitPoints: null
  }
});

Inventory.prototype.sync = dataStore(Inventory);

module.exports = Inventory;
