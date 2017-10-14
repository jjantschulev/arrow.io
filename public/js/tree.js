var trees = [];
function showTrees() {
  for (var i = 0; i < trees.length; i++) {
    trees[i].show();
  }
}

function makeTrees() {
  for (var i = 0; i < 8; i++) {
    trees.push(new Tree());
  }
}

function Tree() {
  this.x = random(WORLD_WIDTH);
  boxes.push(new Box(this.x+42, height - 413, 117, 117))
}

Tree.prototype.show = function () {
  imageMode(CORNER);
  image(treeImage, this.x, height-413, 233, 313);
}
