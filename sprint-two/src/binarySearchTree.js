var BinarySearchTree = function(value, height, treeRoot) {

  var bst = {};
  bst.value = value;
  bst.left = null;
  bst.right = null;
  bst.height = height || 0;
  bst.treeRoot = treeRoot || null;
  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};
//will need to access values recursively for correct placement/location
bstMethods.insert = function(value) {
  //compare value to this BST value. 
  //if lower, 
  if (value < this.value) {
    (this.left) ? this.left.insert(value) : (this.left = new BinarySearchTree(value, this.height + 1, this));
    //call insert on this.left if left exists
    //create a new BST with value and point this.left to it if this.left does not exist
  //if higher,
  } else if (value > this.value) {
    (this.right) ? this.right.insert(value) : (this.right = new BinarySearchTree(value, this.height + 1, this));
    //call insert on this.right if right exists
    //create a new BST with value and point this.right to it if this.right does not exist
  } else if (value === this.value) {
    //if equal, do nothing
  }

  if (this.checkForBalance(this)) { 
    //get head node and call rotate on it
    // debugger;
    var treeMainRoot = this;
    while (treeMainRoot.treeRoot) {
      treeMainRoot = treeMainRoot.treeRoot;
    }
    //treeMainRoot.rotateTree();
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

bstMethods.rotateTree = function() {
  /*
  notes:
  important variables and conditions - 
    n = # of nodes
    minimumHeight = log2(n) 
    rebalance if maxHeight > 2 * minimumHeight 
  
    balancing needs to be done at insertion by doing tree rotations
    //rotate left, rotate right
    the variable assigned to the original bst is root

    to determine rotate left or rotate right, compare children maxHeights of main root
      if positive, rotate right
      if negative, rotate left
    
  */
  
  var rotateDir = this.left.getMaxHeight() - this.right.getMaxHeight();
  var oldRoot, newRoot, oddChild;
  if (rotateDir > 0) { 
    //rotate right
    oldRoot = this;
    newRoot = this.left;
    oddChild = newRoot.right;

    newRoot.treeRoot = newRoot;
    oldRoot.treeRoot = newRoot;
    newRoot.right = oldRoot;
    oldRoot.left = oddChild;

    
  } else { 
    //rotate left
    oldRoot = this;
    newRoot = this.right;
    oddChild = newRoot.left;

    newRoot.treeRoot = newRoot;
    oldRoot.treeRoot = newRoot;
    newRoot.left = oldRoot;
    oldRoot.right = oddChild;
    
  }
  
  
};

bstMethods.count = function() {
  count = 0;
  this.depthFirstLog(function() {
    count++;
  });
  return count;
};

bstMethods.getMaxHeight = function(maxHeight) {
  //returns maxHeight
  var maxHeight = maxHeight || 0;
  if (this.left) { 
    maxHeight = this.left.getMaxHeight(maxHeight); 
  }
  if (this.right) { 
    maxHeight = this.right.getMaxHeight(maxHeight); 
  }
  maxHeight = Math.max(maxHeight, this.height);
  return maxHeight;
};

bstMethods.checkForBalance = function(node) {
  //will be called on the node having a new node inserted
  var treeMainRoot = node;
  while (treeMainRoot.treeRoot) {
    treeMainRoot = treeMainRoot.treeRoot;
  }
  if (node.getMaxHeight() > Math.log2( treeMainRoot.count() ) ) {
    
    return true;
  } else { return false; }
};




/*
 * Complexity: What is the time complexity of the above functions?
    - insert, contains are O(log n)
    - depthFirstLog is O(n)
 */
