'use strict';

var Backbone = require('backbone');

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

module.exports = StatsBlock;
