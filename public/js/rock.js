var rocks = [];
function showRocks() {
  for (var i = 0; i < rocks.length; i++) {
    rocks[i].show();
  }
}

function makeRocks() {
  for (var i = 0; i < 10; i++) {
    rocks.push(new Rock());
  }
}

function Rock() {
  this.x = random(WORLD_WIDTH);
  boxes.push(new Box(this.x+15, height - 185, 131, 79))
}

Rock.prototype.show = function () {
  imageMode(CORNER);
  image(rockImage, this.x, height-200, 177, 98);
}
