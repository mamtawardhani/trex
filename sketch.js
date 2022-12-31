var trex;
var trexImg;

function preload(){
  trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  
}

function setup(){

  trex = createSprite(50,150,10,10);
  trex.addAnimation("running", trexImg)
  trex.scale = 0.5
}


function draw(){

  createCanvas(600,200);
  background(180);


  drawSprites();
}