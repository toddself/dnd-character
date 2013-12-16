'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');

var StatsBlock = Backbone.Model.extend({
  defaults: {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  }
});

StatsBlock.prototype.sync = dataStore(StatsBlock);

module.exports = StatsBlock;
