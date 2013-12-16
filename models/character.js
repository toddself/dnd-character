'use strict';

// TODO: Fix inventory system so it relates to "inventory set" which shows
// the number of that item in the inventory. Also, make weapon & armor
// available as part of inventory

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var constrain = require('../lib/constrain');

var User = require('./user');
var CharacterClass = require('./character-class');
var Race = require('./race');
var StatsBlock = require('./stats-block');
var Size = require('./size');
var SkillsBlock = require('./skills-block');
var FeatsBlock = require('./feats-block');
var Language = require('./language');
var Inventory = require('./inventory');
var ArmorSet = require('./armor-set');
var WeaponSet = require('./weapon-set');

var Character = Backbone.Model.extend({
  urlRoot: '/character',

  constraints: {
    alignment: require('../data/alignments')
  },

  defaults: {
    name: '',
    size: '',
    gender: '',
    alignment: '',
    religion: '',
    deity: '',
    height: '',
    weight: '',
    description: '',
    baseAttack: 0,
    speed: 30,
    initiativeModifier: 0,
    fortitude: 0,
    reflex: 0,
    will: 0,
    armorClass: 10,
    hitPoints: 0
  },

  schema: {
    armorSet: function(){
      return ['hasOne', ArmorSet, {embed: true}];
    },

    weaponSet: function(){
      return ['manyToMany', WeaponSet, {embed: true}];
    },

    inventory: function(){
      return ['manyToMany', Inventory];
    },

    languages: function(){
      return ['manyToMany', Language];
    },

    skills: function(){
      return ['manyToMany', SkillsBlock, {embed: true}];
    },

    feats: function(){
      return ['manToMany', FeatsBlock, {embed: true}];
    },

    size: function(){
      return ['hasOne', Size];
    },

    statsBlock: function(){
      return ['hasOne', StatsBlock, {embed: true}];
    },

    race: function(){
      return ['hasOne', Race];
    },

    classes: function(){
      return ['manyToMany', CharacterClass];
    },

    user: function(){
      return ['hasMany', User];
    }
  },

  initialize: function(){
    this.on('change', this._constrain, this);
  },

  _constrain: constrain
});

Character.prototype.sync = dataStore(Character);

module.exports = Character;