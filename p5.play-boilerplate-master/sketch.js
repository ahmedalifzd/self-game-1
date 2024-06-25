var char1 , char2 
var ball
var volleyball
var character1 , character2
var bot , side1 , side2 , top
var net
var score1 = 0
var score2 = 0
function preload(){
  character1 = loadImage("char1.png")
  character2 = loadImage("char2.png")
  volleyball = loadImage("ball.png")
}


function setup() {
  createCanvas(1920,1080);

  bot = createSprite(750,700,1500,50)

  char1 = createSprite(200,650,20,20)
  char1.addImage(character1)
  char1.scale = .35

  char2 = createSprite(1200,650,20,20)
  char2.addImage(character2)
  char2.scale = .35

  ball = createSprite(750,0,10,10)
  ball.addImage(volleyball)
  ball.scale = .05
  
  
  
}



function draw() {
  background(211, 211, 211);  
  drawSprites();
}