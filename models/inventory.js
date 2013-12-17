'use strict';

var Backbone = require('Backbone');
var dataStore = require('../lib/data-store');
var inventoryTypes = require('../data/inventory-types');
var validate = require('backbone.validator');

var Inventory = Backbone.Model.extend({
  urlRoot: '/inventory',

  validators: {
    type: {
      inList: inventoryTypes
    }
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

Inventory.prototype.validate = validate;
Inventory.prototype.sync = dataStore(Inventory);

module.exports = Inventory;
