'use strict';

var Backbone = require('backbone');
var dataStore = require('data-store');
var Skill = require('./skill');

var SkillsBlock = Backbone.Model.extend({
  defaults: {
    ranks: 0
  },

  schema: {
    skill: function(){
      return ['hasOne', Skill];
    }
  }
});

SkillsBlock.prototype.sync = dataStore(SkillsBlock);

module.exports = SkillsBlock;