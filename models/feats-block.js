'use strict';

var Backbone = require('backbone');
var dataStore = require('data-store');
var Feat = require('./feat');

var FeatBlock = Backbone.Model.extend({
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