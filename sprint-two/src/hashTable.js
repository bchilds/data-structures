

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = v;
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, obj);
  } else { 
    this._storage.get(index)[k] = v;
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage.get(index) === {} ) {
    this._storage.set(index, undefined);
  } else {
    var existObj = this._storage.get(index);
    existObj[k] = undefined;
    this._storage.set(index, existObj);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


