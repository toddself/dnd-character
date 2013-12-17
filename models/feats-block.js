'use strict';

var Backbone = require('backbone');
var dataStore = require('../lib/data-store');
var Feat = require('./feat');

var FeatBlock = Backbone.Model.extend({
  urlRoot: '/featblock',

  defaults: {
    ranks: 0
  },

  schema: {
    Feat: function(){
      return ['hasOne', Feat];
    }
  }
});

FeatBlock.prototype.sync = dataStore(FeatBlock);

module.exports = FeatBlock;