var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var frontInd = 0;
  var endInd = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[endInd] = value;
    endInd++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size = Math.max(size - 1, 0);
      var output = storage[frontInd];
      frontInd++;
      return output;
    }
    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
