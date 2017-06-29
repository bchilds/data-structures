var BinarySearchTree = function(value) {

  var bst = {};
  bst.value = value;
  bst.left;
  bst.right;
  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};
//will need to access values recursively for correct placement/location
bstMethods.insert = function(value) {
  //compare value to this BST value. 
  
  //if lower, 
  if (value < this.value) {
    (this.left !== undefined) ? this.left.insert(value) : (this.left = new BinarySearchTree(value));
    //call insert on this.left if left exists
    //create a new BST with value and point this.left to it if this.left does not exist
  //if higher,
  } else if (value > this.value) {
    (this.right !== undefined) ? this.right.insert(value) : (this.right = new BinarySearchTree(value));
    //call insert on this.right if right exists
    //create a new BST with value and point this.right to it if this.right does not exist
  } else if (value === this.value) {
    //if equal, do nothing
  }

};

bstMethods.contains = function(value, out) {
  //returns boolean if BST contains value
  var out = out || false;
  if (this.value === value) { 
    out = true; 
  } else if ( value < this.value && !out && this.left) { 
    out = this.left.contains(value, out); 
  } else if ( value > this.value && !out && this.right) { 
    out = this.right.contains(value, out) || false; 
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
/*
 * Complexity: What is the time complexity of the above functions?
 */
