var keys = [];

window.onkeydown = function (event) {
  var k = event.key;
  if(keys.indexOf(k) == -1){
    keys.push(k);
  }

  // Process Key Logic Here
}

function keyHold() {
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];

    if (k == 'a'){
      player.move(-1, 0);
    }
    if (k == 'd') {
      player.move(1, 0);
    }
    if (k == ' ') {
      player.jump();
    }
  }
}

window.onkeyup = function (event) {
  var k = event.key;
  keys.splice(keys.indexOf(k), 1);
}

function touch() {
  if(touchIsDown){
    if(touchX < width/3 && touchY > height/ 2){
      if(touchY < height/2 + height/4){
        player.jump();
      }
      if (touchX < width/6){
        player.move(-1, 0);
      }else{
        player.move(1, 0);
      }
    }

  }
}
