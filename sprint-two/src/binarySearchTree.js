var BinarySearchTree = function(value) {

  var bst = {};
  bst.value = value;
  bst.left = {};
  bst.right = {};
  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};
//will need to access values recursively for correct placement/location
bstMethods.insert = function(value) {
  

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
