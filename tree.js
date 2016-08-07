var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend( newTree, treeMethods )
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var found = false;

  var search = function (node) {
    if (node.value === target) {
      found = true
      return found;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        var child = node.children[i];
        search(child);
      }
    }
  }

  search(this);
  return found;
};
