var bgColour;
var arrowImage;
var player;

function preload() {
  arrowImage = loadImage('./assets/arrow.png');

}

function setup() {
  createCanvas(1200, 675);
  bgColour = color(255, 214, 0);
  player = new Player();
}

function draw () {
  background(bgColour);

  player.update();
  player.show();

 for (var i = 0; i < arrows.length; i++) {
   arrows[i].show();
   arrows[i].update();
 }


}
