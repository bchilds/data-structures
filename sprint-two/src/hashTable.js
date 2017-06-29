

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //refactor: always store tuples using insert
  var tuple = [k, v];
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
    this._storage.get(index).push(tuple);
  } else {
    //iterate through each tuple
     //if tuple[0] matches, replace tuple[1] with v
     //if no tuples ever match, need to push tuple to bucket
    var found = false;
    for (var i = 0; i < this._storage.get(index).length && !found; i++) {
      if (this._storage.get(index)[i][0] === k) { this._storage.get(index)[i][0] = v; }
    }
    if ( !found ) { this._storage.get(index).push(tuple); }
  }

};

HashTable.prototype.retrieve = function(k) {
  //refactor to account for tuples
  var index = getIndexBelowMaxForKey(k, this._limit);
  var out;  
  if (this._storage.get(index)) {
    //get index of key
    for (var i = 0; i < this._storage.get(index).length && out === undefined; i++) {
      out = this._storage.get(index)[i][0] === k ? this._storage.get(index)[i][1] : undefined;
    }
  }
  return out;
};

//need to refactor for tuples
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //go to index
    //iterate across typles
      //if any tuple key matches,
      //remove tuple from bucket
  for (var i = 0; i < this._storage.get(index).length; i++ ) {
    if (this._storage.get(index)[i][0] === k) { 
      this._storage.get(index).splice(i, 1); 
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  - insert, retrieve, remove are O(1)
 */


