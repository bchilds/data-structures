var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {};
  var size = 0;
  extend(this, stackMethods);
};

var stackMethods = {};

stackMethods.push = function() {

};

stackMethods.pop = function() {

};

stackMethods.size = function() {

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
