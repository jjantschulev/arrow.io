function Player() {
  this.bow = new Bow();
  this.pos = createVector(random(WORLD_WIDTH), 100);
  this.previousPos = this.pos.copy();
  this.vel = createVector(0, 0);
  this.speed = 5;
  this.onGround = false;
  this.w = 40;
  this.h = 40;
  this.mass = 4;
}

Player.prototype.update = function () {
  this.vel.y += gravity;
  this.pos.add(this.vel);
  this.vel.mult(0.99);
  for (var i = 0; i < boxes.length; i++) {
    if(boxes[i].ontop(this.pos.x-this.w/2, this.pos.y-this.h/2, this.w, this.h)){
      this.pos.y = boxes[i].y - this.h/2;
      this.onGround = true;
      this.vel.y = 0;
    }
    if(boxes[i].inside(this.pos.x-this.w/2, this.pos.y-this.h/2, this.w, this.h)){
      this.pos.x = this.previousPos.x;
    }
    if(boxes[i].onbottom(this.pos.x-this.w/2, this.pos.y-this.h/2, this.w, this.h)){
      this.pos.y = this.previousPos.y;
      this.vel.y = 0;
    }
  }
  // if(this.onGround){
    this.vel.x = (0);
  // }
  this.constrain();
  this.previousPos.set(this.pos);
  // this.bow.update();
}

Player.prototype.show = function () {
  // noStroke();
  // fill(245);
  // ellipse(this.pos.x, this.pos.y, this.w, this.h);
  this.bow.show();
}

Player.prototype.move = function (x, y) {
  this.vel.x = this.speed * x;
};

Player.prototype.constrain = function () {
  this.pos.x = constrain(this.pos.x, width/2, WORLD_WIDTH-width/2);
};

Player.prototype.jump = function () {
  if(this.onGround){
    this.vel.y -= 10;
    this.onGround = false;
  }
}
