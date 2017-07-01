var BinarySearchTree = function(value) {

  var bst = {};
  bst.value = value;
  bst.left;
  bst.right;
  _.extend(bst, bstMethods);
  bst.countNodes = 1;
  bst.height = 1;
  bst.headValue;
  return bst;
};

var bstMethods = {};
//will need to access values recursively for correct placement/location
bstMethods.insert = function(value, call) {
  //compare value to this BST value. 
  call = call + 1 || 1;
  //if lower, 
  if (value < this.value) {
    (this.left !== undefined) ? this.left.insert(value, call) : (this.left = new BinarySearchTree(value));
    //call insert on this.left if left exists
    //create a new BST with value and point this.left to it if this.left does not exist
  //if higher,
    this.countNodes++;
  } else if (value > this.value) {
    (this.right !== undefined) ? this.right.insert(value, call) : (this.right = new BinarySearchTree(value));
    //call insert on this.right if right exists
    //create a new BST with value and point this.right to it if this.right does not exist
    this.countNodes++;
  } else if (value === this.value) {
    //if equal, do nothing
  }
  
  if (call > this.height) { this.height = call; }
};

bstMethods.contains = function(value, out) {
  //returns boolean if BST contains value
  var out = out || false;
  if (this.value === value) { 
    out = true; 
  } else if ( value < this.value && !out && this.left) { 
    out = this.left.contains(value, out); 
  } else if ( value > this.value && !out && this.right) { 
    out = this.right.contains(value, out); 
  }
  return out;
};

bstMethods.depthFirstLog = function(callback) {
  //executed callback function on each element in BST
  //operate on this value
  //if has left, operate on left
  //if has right, operate on right
  callback(this.value);
  if (this.left) { this.left.depthFirstLog(callback); }
  if (this.right) { this.right.depthFirstLog(callback); }
};

bstMethods.breadthFirstLog = function(callback) {

  var queue = [];
  var moreChildren = true;
  var currentChildren = [];
  //per research: must be implemented iteratively
  //process starting node
  currentChildren.push(this);
  //while there are children
  while (moreChildren) {
    if (currentChildren.length > 0) { 
      var newChildren = [];
      currentChildren.forEach(function(child) {
        queue.push(child);
        if (child.left) { newChildren.push(child.left); }
        if (child.right) { newChildren.push(child.right); }
      });
      currentChildren = newChildren.slice();
    } else {
      moreChildren = false;
    }

  }
    //process starting children
    //check for children's children
    //repeat
    

  //we now have queue of all nodes
  //perform callback on all nodes
  //arrayOut for testing
  var arrayOut = [];
  queue.forEach(function(element) {
    element.value = callback(element.value);
    arrayOut.push(element.value);
  });

  return arrayOut;
};


/*
 * Complexity: What is the time complexity of the above functions?
    - insert, contains are O(log n)
    - depthFirstLog is O(n)
 */
