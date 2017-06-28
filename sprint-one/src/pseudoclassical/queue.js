var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.length = 0;
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.length++;
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    var out = this.storage[this.start];
    this.storage[this.start] = undefined;
    this.start++;
    this.length--;
    return out;
  }
};

Queue.prototype.size = function() {
  return this.length;
};

