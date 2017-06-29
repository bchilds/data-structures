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

bstMethods.contains = function(value) {
  //returns boolean if BST contains value
  var out;

  return out;
};

bstMethods.depthFirstLog = function(callback) {
  //executed callback function on each element in BST

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
