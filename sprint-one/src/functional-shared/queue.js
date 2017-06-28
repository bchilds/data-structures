var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.length = 0;
  someInstance.start = 0;
  someInstance.end = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.length++;
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
    var out = this.storage[this.start];
    this.storage[this.start] = undefined;
    this.length--;
    this.start++;
    return out;
  }

};

queueMethods.size = function() {
  return this.length;
};

