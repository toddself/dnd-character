'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var validate = require('backbone.validator');

// var User = require('./user');
var CharacterClass = require('./character-class');
var Race = require('./race');
var StatsBlock = require('./stats-block');
var Size = require('./size');
var SkillsBlock = require('./skills-block');
var FeatsBlock = require('./feats-block');
var Language = require('./language');

var InventorySet = require('./inventory-set');
var ArmorSet = require('./armor-set');
var WeaponSet = require('./weapon-set');

var alignments = require('../data/alignments');

var Character = Backbone.Model.extend({
  urlRoot: '/character',

  validators: {
    alignment: {
      inList: alignments
    }
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
      return ['hasOne', WeaponSet, {embed: true}];
    },

    inventory: function(){
      return ['hasOne', InventorySet];
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

    // user: function(){
    //   return ['hasMany', User];
    // }
  },

});

Character.prototype.validate = validate;
Character.prototype.sync = dataStore(Character);

module.exports = Character;