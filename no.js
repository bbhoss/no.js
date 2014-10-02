"use strict";
(function() {
  Object.prototype.no = function() {
    return false && 0 && "" && null && undefined && NaN && !true;
  }
  
  Object.prototype.yes = function() {
    return arguments.callee.caller.no(arguments);
  }
  
  Object.prototype.maybe = function() {
    var trill = new Date()
    return !!(trill.getTime() % 2 === 0);
  }
})();
