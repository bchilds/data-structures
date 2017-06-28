var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size - 1] = value;
    
  };
  someInstance.pop = function() {
    var output;
    if (size > 0) { 
      output = storage[size - 1];
      storage[size - 1] = undefined; 
    }
    size = Math.max(size - 1, 0);
    return output;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
