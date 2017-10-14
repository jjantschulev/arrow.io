var boxes = [];

function showBoxes() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}

function Box(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

}

Box.prototype.show = function () {
  noStroke();
  fill(100, 100);
  rect(this.x, this.y, this.w, this.h);
}

Box.prototype.inside = function (x, y, w, h) {
  return (x + w > this.x && x < this.x + this.w) && (y + h > this.y && y < this.y + this.h);
}

Box.prototype.ontop = function (x, y, w, h) {
  return (x + w > this.x && x < this.x + this.w) && (y + h > this.y && y < this.y + 10);
}

Box.prototype.onbottom = function (x, y, w, h) {
  return (x + w > this.x && x < this.x + this.w) && (y + h > this.y + this.h - 10 && y < this.y + this.h);
}
