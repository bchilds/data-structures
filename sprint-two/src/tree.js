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
  this.children.push(childTree);
  
};

treeMethods.contains = function(target, out) {
  //recursively goes through child nodes until a result is found or there are no more children
  var out = out || false;
  //returns true or false
  
  if (this.value === target) { 
    return true;
  } else {
    if (!out && this.children.length > 0) { //if out is false and there are children
      for (var i = 0; i < this.children.length; i++ ) {
        out = this.children[i].contains(target, out);
      }
    }
  }
  
  return out;
};



/*
 * Complexity: What is the time complexity of the above functions?
  -addChild should be constant time
  -contains will be linear time
 */
