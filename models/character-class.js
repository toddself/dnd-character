'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');

var CharacterClass = Backbone.Model.extend({
  urlRoot: '/characterclass'
});

CharacterClass.prototype.sync = dataStore(CharacterClass);

module.exports = CharacterClass;
