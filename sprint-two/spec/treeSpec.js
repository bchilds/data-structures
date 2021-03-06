describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  //added test
  it('should work with non-number values', function() {
    tree.addChild('cow');
    tree.children[0].addChild(true);
    expect(tree.contains('cow')).to.equal(true);
    expect(tree.contains(true)).to.equal(true);
  });

  it('should be able to return correct parent nodes', function() {
    tree.addChild(7);
    tree.addChild(6);
    tree.children[0].addChild(12);
    //structure: undefined -> [7 -> 12, 6]
    expect(tree.children[0].children[0].parent.value).to.equal(7);
    expect(tree.children[0].parent.value).to.equal(undefined);
    expect(tree.parent).to.equal(null);
  });

  it('should be able to correctly remove node from parent', function() {
    tree.addChild(7);
    tree.addChild(6);
    tree.children[0].addChild(12);
    //structure: undefined -> [7 -> 12, 6]
    var removedChild = tree.children[0].children[0];
    removedChild.removeFromParent();

    expect(removedChild.parent).to.equal(null);
    expect(tree.children[0].children.indexOf(removedChild)).to.equal(-1);
  });

  //test for traverse
  it('should run the callback on each node in tree', function() {
    var double = function(value) {
      return value = 2 * value;
    };

    tree.addChild(7);
    tree.addChild(6);
    tree.children[0].addChild(12);
    //structure: undefined -> [7 -> 12, 6]  
    tree.traverse(double);
    expect(tree.children[0].value).to.equal(14);  
  });
});
