var arrows = [];

function Arrow(pos, dir, force) {
  this.dir = dir;
  this.pos = pos.copy();
  this.vel = p5.Vector.fromAngle(dir);
  this.vel.setMag(force);
  this.w = 16;
  this.h = this.w * 6.8654;
  this.landed = false;
  this.tipPos = pos.copy();
}

Arrow.prototype.show = function () {
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.dir + PI/2);
  imageMode(CENTER);
  if(this.landed){
    // fill(0);
    // noStroke();
    // ellipse(0, 0, 10, 10);
    image(arrowImage, 0, 0, this.w, this.h);
  }else{
    image(arrowImage, 0, 0, this.w, this.h);
  }
  pop();
};

Arrow.prototype.update = function () {

  if (!this.landed) {
    this.pos.add(this.vel);
    this.tipPos.add(this.vel);
    this.vel.mult(0.98);
    this.tipPos.x = this.pos.x + this.h/2 * sin(this.dir + PI/2);
    this.tipPos.y = this.pos.y - this.h/2 * cos(this.dir + PI/2);
  }
  if(this.vel.mag() < 5){
    this.landed = true;
    this.vel.mult(0);
  }
};
