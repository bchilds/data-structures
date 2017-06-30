describe('doublyLinkedList', function() {
  var doublydoublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
  //this test is intended to deal tail being misassigned somehow, like a node being deleted through other means
  it('should always have tail point to a node if head points to a node', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.tail = undefined;
    doublyLinkedList.addToTail(6);

    expect(doublyLinkedList.head.value === 5 && doublyLinkedList.tail.value === 6);
  });

  it('should be able to add nodes to head', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    doublyLinkedList.addToHead(7);
    expect(doublyLinkedList.head.value).to.equal(7);
  });

  it('should be able to remove tail', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    doublyLinkedList.addToHead(7);
    var tail = doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(6);
    expect(tail.value).to.equal(5);
  });

});
