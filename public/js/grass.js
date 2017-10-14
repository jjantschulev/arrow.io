var grassPos = 0;
var fadedGrassPos = 0;

function showGrass() {
  grassPos = player.pos.x - player.pos.x *1.2;
  imageMode(CORNER);
  for (var i = 0; i <= WORLD_WIDTH+1800; i+=600) {
    image(grassImage, grassPos+i, height-104, 600, 104);
  }

  fadedGrassPos = player.pos.x - player.pos.x *1.1;
  imageMode(CORNER);
  for (var i = 0; i <= WORLD_WIDTH+1800; i+=600) {
    image(fadedGrassImage, fadedGrassPos+i, height-120, 600, 88);
  }
}

function showFadedGrass() {

}
