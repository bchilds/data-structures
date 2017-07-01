var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) { 
    var oldNode = list.head;
    var newNode = new Node(value);
    if (oldNode !== null) {
      newNode.next = oldNode;
      oldNode.previous = newNode;
    }
    list.head = newNode;
    if (list.tail === null) {
      list.tail = newNode;
    }
  };

  list.removeTail = function() {
    var newTail = null;
    if (list.tail !== null) {
      newTail = list.tail.previous;
    }
    var removed = list.tail;
    list.tail = newTail || null;

    if (newTail !== null) {
      newTail.next = null;
    }

    return removed;
  };

  list.addToTail = function(value) {
    //create a new node with value as input
      //iterate to end of list
      //point next to the new node
    
    var newNode = new Node(value);

    if (!list.tail) {
      if (!list.head) {
        list.head = newNode;
        list.tail = newNode;
      } else {
        var next = list.head;
        while (next.next !== null) {
          next = next.next;
        } 
        next.next = newNode;
        list.tail = newNode;
      }
    } else {
      var node = list.tail;
      node.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var node = list.head;
    var out = null;
    if (node !== null) {
      out = node.value;
      list.head = node.next;
    }
    //go to list.head
    //get its value
    //go to list.head.next if not null
      //make list.head point to list.head.next
    return out;
  };

  list.contains = function(target) { 
    //returns true or false
    var out = false;
    var node = list.head;
    var next = true;
    while (next) {
      if (node === null) { 
        next = false; 
      } else {
        if (node.value === target) {
          out = true;
          next = false;
        } else {
          node = node.next;
        }
      }
      
    }
    return out;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.previous = null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  - addToTail, removeHead are both O(1)
  - contains is O(n)
 */
