'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');

var Skill = Backbone.Models.extend({
  urlRoot: '/skill',
  defaults: {
    name: '',
    description: ''
  }
});

Skill.prototype.sync = dataStore(Skill);

module.exports = Skill;
