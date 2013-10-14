'use strict';

var config = require('../config');
var Model = require('levelsync')(config.get('db'));

module.exports = Model.extend({
  defaults: {
    str: 8,
    con: 8,
    dex: 8,
    int: 8,
    wis: 8,
    cha: 8,
    name: '',
    alignment: '',
    race: '',
    classData: [
      {
        level: 0,
        class: ''
      }
    ],
    level: 0,
    saves: {},
    hp: 0,
    ac: 0,
    armor: {},
    baseAttack: 0,
    age: 0,
    gender: '',
    height: 0,
    weight: 0,
    eyes: '',
    diety: '',

  },


});