function Cam(t) {
  this.x = t.x;
  this.target = t; //PVector
  this.lag = 0.1;
}

Cam.prototype.use = function () {
  this.x = lerp(this.x, this.target.x, this.lag);
  this.x = constrain(this.x, width/2, WORLD_WIDTH - width/2);
  translate(width/2-this.x, 0);
}

Cam.prototype.mouse = function () {
  return {
    x : 1,
    y : 1,
  }
}
