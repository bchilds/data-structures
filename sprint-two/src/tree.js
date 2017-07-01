var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; //this array will contain all the child Trees
  newTree.parent = parent || null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a childTree(value)
  //add this new child as a child of the current tree
  var childTree = new Tree(value, this);
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

treeMethods.removeFromParent = function() {
  //the problem description does not say anything about deleting
  //a child node altogether. It only specifies to remove parents.

  //operates on current node
    //get parent node
    //set parent to null
    //remove reference from children array in parent node

  var parentNode = this.parent;
  if (parentNode !== null) {
    this.parent = null;
    parentNode.children.splice(parentNode.children.indexOf(this), 1);
  }
};

treeMethods.traverse = function(cb) {
  //takes in a callback function
  //run cb on each value in this tree
  //call traverse on each child of this tree
  if (this.value) { 
    this.value = cb(this.value);
  }
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  -addChild is O(1)
  -contains is O(n)
 */
