

var HashTable = function() {
  this._limit = 8; //this is the base value
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //refactor: always store tuples using insert
  this.checkUsage();
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
  
  //set the bucket to undefined again
  if (this._storage.get(index).length === 0) { this._storage.set(index, undefined); }
};

HashTable.prototype.rehashAll = function(oldStorage, newStorage) {
  //should take the current hash table and re-hash it
  //with the current limit

  //use limitedArray.each to go across each old bucket
  //rehash each value in those buckets into this._storage

  //oldStorage is class limitedArray
  //old storage will contain tuples which need to be rehashed
  
  oldStorage.each(function(bucketArray) {
    for (var i = 0; i < bucketArray ? bucketArray.length : 0; i++ ) {
      //debugger;
      //newStorage.insert(bucketArray[i][0], bucketArray[i][1]);
    }
  });
};

HashTable.prototype.checkUsage = function() {
  //checks if the current usage if >75% or <25%
  //modifies the limit accordingly and rehashes table if so

  //things to keep in mind:
  //   buckets are limited arrays, not normal arrays

  var indicesUsed, ratio, oldStorage, needsRehash, newStorage;
  
  indicesUsed = 0;
  needsRehash = false;

  this._storage.each(function(index) {
    if (index) { indicesUsed++; }
  });

  ratio = indicesUsed / this._limit;
  if (ratio >= 0.75) {
    this._limit = this._limit * 2;
    needsRehash = true;
  } else if (ratio <= 0.25 && this._limit > 1) {
    this._limit = this._limit / 2;
    needsRehash = true;
  }

  if (needsRehash) { 
    oldStorage = this._storage;
    newStorage = LimitedArray(this._limit);
    this.rehashAll(oldStorage, this);
    this._storage = newStorage;
  }
  
};


/*
 * Complexity: What is the time complexity of the above functions?
  - insert, retrieve, remove are O(1)
 */


