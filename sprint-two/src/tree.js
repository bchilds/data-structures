var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; //this array will contain all the child Trees
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a childTree(value)
  //add this new child as a child of the current tree
  var childTree = new Tree(value);
  
};

treeMethods.contains = function(target) {
  //recursively goes through child nodes until a result is found or there are no more children
};



/*
 * Complexity: What is the time complexity of the above functions?
  -addChild should be constant time
  -contains will be linear time
 */
