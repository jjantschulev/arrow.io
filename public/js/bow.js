function Bow() {
  this.aiming = false;
  this.relMouse = createVector(0, 0);
  this.maxStrength = 50;
  this.strength = 0;
  this.dir = 0;
  this.help = true;
}

Bow.prototype.show = function () {
  if(this.aiming && this.help){
    this.showTrajectory();
  }
  push();
  translate(player.pos.x, player.pos.y);
  rotate(this.dir);
  imageMode(CENTER);
  image(bowImage, 0, 0, map(this.strength, 0, 30, 30, 50), 65);
  rotate(PI/2)
  image(arrowImage, 0, -20 + map(this.strength, 0, 30, 0, 10), 7, 60);
  pop();

};

Bow.prototype.update = function () {
  this.relMouse.x -= pmouseX - mouseX;
  this.relMouse.y -= pmouseY - mouseY;
  this.relMouse.setMag(constrain(this.relMouse.mag(), 0, 30*8));
  this.strength = this.relMouse.mag()/8;
  this.dir = this.relMouse.heading() + PI;
}

Bow.prototype.shoot = function () {
  if(this.strength > 5){
    arrows.push(new Arrow(player.pos.x, player.pos.y, this.dir, this.strength));
  }
  // this.relMouse.setMag(0);
  // this.dir = 0;
  this.strength = 1;
}

Bow.prototype.load = function () {
  this.relMouse.setMag(1);
  // this.dir = 0;
}

function mouseDragged() {
  if(player.bow.aiming){
    player.bow.update();
  }
}

function mousePressed() {
  if(mouseX >= width/3){
    player.bow.load();
    player.bow.aiming = true;
  }
}

function mouseReleased() {
  if(mouseX >= width/3){
    player.bow.shoot();
    player.bow.aiming = false;
  }
}


Bow.prototype.showTrajectory = function() {
  stroke(245, 150);
  strokeWeight(6);
  var length = 100;
  var d = 3;
  var pos = createVector(player.pos.x, player.pos.y);
  var vel = p5.Vector.fromAngle(this.dir);
  vel.setMag(this.strength);
  for (var i = 0; i <= length; i+=1) {
    vel.y += gravity/1;
    pos.add(vel);
    vel.x *= (0.98);
    if(i % d == 0){
      point(pos.x, pos.y);
    }
    var breaking = false
    for (var j = 0; j < boxes.length; j++) {
      if(boxes[j].inside(pos.x, pos.y, 0, 0)){
        breaking = true;
      }
    }
    if (breaking) {
      break;
    }
  }
}
