var arrows = [];

function showArrows() {
  for (var i = arrows.length-1; i >= 0 ; i--) {
    arrows[i].show();
    arrows[i].update();
  }
}

function Arrow(x, y, dir, force) {
  this.pos = createVector(x, y);
  this.vel = p5.Vector.fromAngle(dir);
  this.vel.setMag(force);
  this.w = 7;
  this.h = 60;
  this.mass = 1;
  this.landed = false
}

Arrow.prototype.show = function () {
  imageMode(CENTER);
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.vel.heading()+PI/2);
  if(this.landed){
    image(landedArrowImage, 0, 0, this.w, this.h/1.6);
  }else{
    image(arrowImage, 0, this.h/3, this.w, this.h);
  }
  pop();
};


Arrow.prototype.update = function () {
  for (var i = 0; i < boxes.length; i++) {
    if(boxes[i].inside(this.pos.x, this.pos.y, 0, 0)){
      this.landed = true;
    }
  }
  if(!this.landed){
    this.vel.y += gravity/this.mass;
    this.pos.add(this.vel);
    this.vel.x *= (0.98);
  }
  if(this.pos.x < 0 || this.pos.x > WORLD_WIDTH){
    arrows.splice(arrows.indexOf(this), 1);
    return;
  }
  if(this.landed){
    if(p5.Vector.dist(player.pos, this.pos) < 50){
      arrows.splice(arrows.indexOf(this), 1);
    }
  }
};
