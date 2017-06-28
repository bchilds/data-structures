var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.start = 0;
  newQueue.end = 0;
  
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[end] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
    var out = this.storage[start];
    this.storage[start] = undefined;
    this.start++;
    this.length--;
    return out;
  }
};

queueMethods.size = function() {
  return this.length;
};