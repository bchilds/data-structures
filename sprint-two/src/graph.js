

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

var Gnode = function(node) {
  //each Gnode is an object with a value and array of edges
  this.value = node;
  this.edges = [];
};

// var Edge = function(node1, node2) {
//   this.edge1 = [node1, node2];
//   this.edge2 = [node2, node1];
// };

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Gnode(node);
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] === undefined) { 
    return false; 
  } else { return true; }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes[node].edges.length; i++ ) {
    this.removeEdge(node, this.nodes[node].edges[i]);
  }
  this.nodes[node] = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].edges.includes(toNode)) {
    return true;
  } else { return false; }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode !== toNode) {
    this.nodes[fromNode].edges.push(toNode);
    this.nodes[toNode].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode].edges.indexOf(toNode);
  if (index !== -1) { this.nodes[fromNode].edges.splice(index, 1); }

  index = this.nodes[toNode].edges.indexOf(fromNode);
  if (index !== -1) { this.nodes[toNode].edges.splice(index, 1); }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


