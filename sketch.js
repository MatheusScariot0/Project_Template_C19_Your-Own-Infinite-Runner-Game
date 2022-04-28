var foguete, moeda, universo, leftBoundary, rightBoundary;
var fogueteImg, moedaImg, universoImg;

var PLAY = 1;
var END = 0;
var gameState = 1;


function preload() {
  fogueteImg = loadImage("foguete1.png");
  //moedaImg = loadImage("moeda1-removebg-preview.png");
  universoImg = loadImage("universo.jpg", 400, 400)

}


function setup() {
  createCanvas(400, 400);



  //var moeda = createSprite

  //moeda.addImage("moeda",moedaImg)
  var universo = createSprite(width / 2, 200);
  universo.addImage(universoImg)
  universo.velocityY = 4;

  var foguete = createSprite(200, 200, 50, 50);
  foguete.addAnimation("foguete", fogueteImg)
  foguete.scale = 0.3

  //var moeda = createSprite(180, 200, 40, 40)
  //moeda.addImage("moeda", moedaImg)

  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(0, 0, 100, 800)
  rightBoundary.visible = false;



}

function draw() {
  background(0)

  image(universoImg, 0, 0, 400, 400)
  image(fogueteImg, 170, 280, 60, 80)
  image(moedaImg, 180, 200, 40, 40)
  if (keyIsDown("LEFT_ARROW")) {
    foguete.x = foguete.x - 3
  }
  if (keyIsDown("RIGHT_ARROW")) {
    foguete.x = foguete.x + 3
  }
  if (universo.y > 400) {
    universo.y = 300
  }
  if (universo.x > height) {
    universo.x = height / 2;
  }
  drawSprites()
}
function createMoeda() {
  var moeda = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
  moeda.addImage(moedaImg);
  moeda.scale = 0.12;
  moeda.velocityY = 5;
  moeda.lifetime = 200;
}