describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  //new test
  it('should keep track of how many nodes are in BST', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.count()).to.equal(5);
  });

  it('should be aware of BST height', function() {
    binarySearchTree = BinarySearchTree(7);
    binarySearchTree.insert(5);
    binarySearchTree.insert(10);
    binarySearchTree.insert(9);
    binarySearchTree.insert(12);
    binarySearchTree.insert(18);
    //         7
    //     [5  ,  10]
    //  [ ,  ]   [9, 12]
    //         [ , ] [ , 18]
    //                   [ , ]
    expect(binarySearchTree.getMaxHeight()).to.equal(3);
  });

  it('should perform a callback on each node using BFS', function() {
    var func = function(value) {
      value += 2;
      return value;
    };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    //         5
    //     [2  ,  7]
    //  [ , 3]   [6, ]
    //should log 5, 2, 7, 3, 6
    expect(binarySearchTree.breadthFirstLog(func)).to.eql([7, 4, 9, 5, 8]);
  });
});
