'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');

var Skill = Backbone.Model.extend({
  urlRoot: '/skill',
  defaults: {
    name: '',
    description: ''
  }
});

Skill.prototype.sync = dataStore(Skill);

module.exports = Skill;
