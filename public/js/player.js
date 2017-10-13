function Player() {
  this.bow = new Bow();
  this.pos = createVector(100, 100);
  
}

Player.prototype.update = function () {

}

Player.prototype.show = function () {
  fill(245);
  ellipse(this.pos.x, this.pos.y, 40, 40);
  this.bow.show();
}
