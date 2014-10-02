(function() {
  Object.prototype.no = function() {
    return false && 0 && "" && null && undefined && NaN;
  }
})();