var arrowImage, landedArrowImage, fadedGrassImage, grassImage, rockImage, treeImage, bowImage, sun;
var player;
var cam;
var gravity = 0.4;

function preload() {
  arrowImage = loadImage('./assets/arrow.png');
  landedArrowImage = loadImage('./assets/landed_arrow.png');
  fadedGrassImage = loadImage('./assets/faded_grass.png');
  grassImage = loadImage('./assets/grass.png');
  rockImage = loadImage('./assets/rock.png');
  treeImage = loadImage('./assets/tree.png');
  treeImage2 = loadImage('./assets/tree2.png');
  treeImage3 = loadImage('./assets/tree3.png');
  bowImage = loadImage('./assets/bow.png');
  sun = loadImage('./assets/sun.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
  cam = new Cam(player.pos);

  boxes.push(new Box(0, height-100, WORLD_WIDTH, 1000));
  makeRocks();
  makeTrees();
}

function draw () {
  background(255, 208, 0);
  keyHold();
  touch();
  imageMode(CENTER);
  image(sun, width/2, height/2);
  cam.use();

  // showFadedGrass();
  showTrees();
  showRocks();
  showArrows();
  // showBoxes();
  player.update();
  player.show();
  showGrass();

}
