'use strict';

var Backbone = require('backbone');
var sync = require('backbone-orm').sync;
var Skill = require('./skill');

var SkillsBlock = Backbone.Model.extend({
  urlRoot: '/skillsblock',

  defaults: {
    ranks: 0
  },

  schema: {
    skill: function(){
      return ['hasOne', Skill];
    }
  }
});

SkillsBlock.prototype.sync = sync(SkillsBlock);

module.exports = SkillsBlock;