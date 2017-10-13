function Bow() {
  this.aiming = false;
  this.relMouse = createVector(0, 0);
}

Bow.prototype.show = function () {
  stroke(245);
  strokeWeight(5);
  line(player.pos.x, player.pos.y, player.pos.x+this.relMouse.x, player.pos.y+this.relMouse.y);
};

Bow.prototype.shoot = function () {
  this.relMouse.mult(-1);
  var strength = this.relMouse.mag()/8;
  if(strength > 15){
    var dir = this.relMouse.heading();
    console.log(strength);
    arrows.push(new Arrow(player.pos, dir, strength));
  }
}

function mouseDragged() {
  player.bow.relMouse.x -= pmouseX - mouseX;
  player.bow.relMouse.y -= pmouseY - mouseY;
}

function mousePressed() {
  player.bow.aiming = true;
  console.log('pressed');
}

function mouseReleased() {
  player.bow.shoot();
  player.bow.aiming = false;
  player.bow.relMouse.set(0, 0);
  console.log('released');
}
