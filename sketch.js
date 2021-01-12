var tom, tom_running;
var jerry, jerry_running;
var garden, gardenImage;
var Jerry_Survival_Time;

function preload(){
  
 tom1     = loadAnimation("tomOne.png"); 
 tom2= loadAnimation("tomTwo.png","tomThree.png");
 tom3= loadAnimation("tomFour.png");
 jerry1  = loadAnimation("jerryOne.png");
 jerry2= loadAnimation("jerryTwo.png","jerryThree.png");
 jerry3= loadAnimation("jerryFour.png");
  gardenImage     = loadImage("garden.png");
}

function setup() {
  createCanvas(600, 600);
  
 tom = createSprite(500,500,50,50);
 tom.addAnimation("tomOne.png",tom1);
 tom.scale = 0.1;

 jerry = createSprite(50,500,50,50);
 jerry.addAnimation("jerryOne.png",jerry1);
 jerry.scale = 0.1;
  
  Jerry_Survival_Time = 0;
}

function draw() {

background(gardenImage);
  
stroke("black");
  text("Jerry_Survival_Time: "+ Jerry_Survival_Time, 280,50);
  Jerry_Survival_Time = Jerry_Survival_Time + Math.round(getFrameRate()/60);
  
  if (keyDown("LEFT_ARROW")) {
    tom.x = tom.x-5;
    tom.addAnimation("tom_running",tom2);
    tom.changeAnimation("tom_running");
    jerry.addAnimation("jerry_running",jerry2);
    jerry.changeAnimation("jerry_running");
  }
   if (keyDown("RIGHT_ARROW")) {
    tom.x = tom.x+5;
    tom.addAnimation("tom_running",tom2);
    tom.changeAnimation("tom_running");
    jerry.addAnimation("jerry_running",jerry2);
    jerry.changeAnimation("jerry_running");
  } 
    
  if (tom.x - jerry.x < tom.width/2 + jerry.width/2
   && jerry.x - tom.x < tom.width/2 + jerry.width/2) {
    tom.addAnimation("tom_running",tom3);
    tom.changeAnimation("tom_running");
    jerry.addAnimation("jerry_running",jerry3);
    jerry.changeAnimation("jerry_running");
    Jerry_Survival_Time = 0 ;
    tom.velocityX = 0;
  }
  
  drawSprites();
}