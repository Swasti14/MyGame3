var astronaut;
var obstacle1;
var gameState = 0;
var lives = 3;

function preload(){
  astronautImage = loadImage("Images/astronaut.png");
  obstacle1Image = loadImage("Images/aeroplane1.png");
}

function setup() {
  createCanvas(displayWidth-200, displayHeight-20);
  astronaut = createSprite(400,displayHeight-30);
  astronaut.addImage("astronaut", astronautImage);
  astronaut.scale = 0.4;
}

function draw() {
  background(180); 
  keyPressed();
  textSize(20)
  text("Lives: "+lives,20,20);
  
  if(gameState === 0){
    background(154,210,255);
    textSize(40);
    stroke(10);
    text("Astronaut Game",200,100);

    textSize(20);
    stroke(2);
    text("A astronaut is trying to reach the ",100,200);
    text("mars surface but there are obstacles",100,220);
    text("in his way help him overcome all the obsacles",100,240);
    text("Press 's' to start.",180,270);

    textSize(40);
   text("ENJOY THE GAME!!",100,350);
   astronaut.visible = false;
  }  

  if(gameState === 1){
    levelOneObstacles();
    astronaut.velocityY = -5;
    if(keyDown("left_arrow")){
      astronaut.x = astronaut.x-2;
      astronaut.velocityY = 0;
    }
  
    if(keyDown("right_arrow")){
      astronaut.x = astronaut.x+2;
      astronaut.velocityY = 0;
    }

    if(astronaut.collide(obstacle1)){
      lives = lives-1;
    }
}
  drawSprites();
}

function levelOneObstacles(){
if(World.frameCount%80 ===  0){
  astronaut.visible = true;
  obstacle1 = createSprite(0,200,20,20);
  obstacle1.addImage("obstacle", obstacle1Image);
  obstacle1.scale = 0.4;

  position = Math.round(random(1,2));
  if(position === 1){
    obstacle1.x = 0;
    obstacle1.velocityX = 5;
  }
  else if(position ===  2){
    obstacle1.x = 800;
    console.log("right");
    obstacle1.velocityX = -5;
  }
}

}
function keyPressed(){
  if(keyCode === 83){
     gameState = 1;      
  }
}