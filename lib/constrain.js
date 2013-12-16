'use strict';

module.exports = function(model){
  Object.keys(model.changed).forEach(function(key){
    if(this.constraints.indexOf(key) > -1){
      if(this.constraints[key].indexOf(model.changed[key]) === -1){
        this.attributes[key] = this._previousAttributes[key];
      }
    }
  });
};
