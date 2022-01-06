var ground;
var bow;
var arrow;
var balloon;
var line1;
var blueBalloon1,greenBalloon2, pinkBalloon3, redBalloon4;
var balloon1, balloon2, balloon3, balloon4;
var score = 0;
var START = 1;
var PLAY = 2;
var END = 3;
var RESTART = 4;
var OVER = 5;
var gameState = START;


function preload(){
//load all the images of game here.
    ground1 = loadImage("background0.png");
    bow1 = loadImage("bow0.png");
    arrow1 = loadImage("arrow0.png");
    blueBalloon1 = loadImage("blue_balloon0.png");
    greenBalloon2 = loadImage("green_balloon0.png");
    pinkBalloon3 = loadImage("pink_balloon0.png");
    redBalloon4 = loadImage("red_balloon0.png");
}



function setup() {
    createCanvas(595, 520);
  
//create the ground.
    ground = createSprite(1100,100,600,600);
    ground.addImage(ground1);
    ground.scale = 2.5;
  
//create the bow.
    bow = createSprite(584,250,10,10);
    bow.addImage(bow1);
  
//make groups of balloons and arrow.
    redGroup = new Group();
    greenGroup = new Group();
    blueGroup = new Group();
    pinkGroup = new Group();
    ArrowGroup = new Group();
}

function draw() {
//Give colour to backGround.
    background("skyBlue");
  
//Create the Start GameState.
    if(gameState === START){
    textSize(20);  
    fill("red");  
    text("Press 'ENTER' To Start",220, 260);  
    textSize(20);
    fill("black");
    text("Make the Score '25' To Win!",205, 400);  
    
  
    if(keyDown("enter")){
    gameState = PLAY;
    ground.x = 400;
    }
    }
    if(gameState === PLAY){
    
//To make the ground moving.
    ground.velocityX = -2;
    if(ground.x<89){
      ground.x = ground.width/2;
    }

    
//create the line.
   line1 = createSprite(520,250,2,600);
   line1.shapeColour = red; 

//To shoot an arrow.
    if(keyWentDown("space")){
      spawnArrow();
    }
    bow.y = mouseY;
  
//create different balloons at a particular interval of time.
    var select_sprites = Math.round(random(1, 4));
    if(frameCount%180 == 0){
    if(select_sprites == 1) {
        blue1();
    }
    }
    if(frameCount%180 == 0){
      if(select_sprites == 2){
      green2();
    }
    }
    if(frameCount%180 == 0){
    if(select_sprites == 3) {
      pink3();
    }
    }
    if(frameCount%180 == 0){
    if(select_sprites == 4) {
      red4();
    }  
    }
  
    if(ArrowGroup.isTouching(blueGroup)) {
      blueGroup.destroyEach();
      ArrowGroup.destroyEach();
      score = score+1;
    }
     
    if(ArrowGroup.isTouching(greenGroup)) {
      greenGroup.destroyEach();
      ArrowGroup.destroyEach();
      score = score+1;
    }
    
    if(ArrowGroup.isTouching(redGroup)) {
      redGroup.destroyEach();
      ArrowGroup.destroyEach();
      score = score+1;
    }
    
    if(ArrowGroup.isTouching(pinkGroup)) {
      pinkGroup.destroyEach();
      ArrowGroup.destroyEach();
      score = score+1;
    }
    }
  
    if(score === 25){
    gameState = END;
    }
  
//create the End GameState.
    if(gameState === END){
    ground.x = -600;
    textSize(40);
    fill("red");
    text("You Win!",230, 260);
    textSize(30);
    fill("black");
    text("Press 'R' To Restart",180, 340);
    }
    if(keyDown("r")){
     gameState = PLAY;
     score = 0;
    }
   
  if(blueGroup.collide(line1) || greenGroup.collide(line1) || redGroup.collide(line1) || pinkGroup.collide(line1)){
    gameState = OVER;
    
  }
//create the Over GameState.
    if(gameState === OVER){
      ground.x = -600;
    textSize(40);
    fill("red");
    text("Game Over!",200, 260);
    textSize(30);
    fill("black");
    text("Press 'R' To Restart",180, 340);
    }
  
//To make sprites visible.
    drawSprites();
    
//create the score board.
    textSize(20);
    fill("blue");
    text("Score : " +score, 410, 50); 
}

//Create Blue balloon.
function blue1() {
    balloon1 = createSprite(0, Math.round(random(20, 370)), 10, 10);
    balloon1.addImage( blueBalloon1); 
    balloon1.velocityX = 3;
    balloon1.scale = 0.11;
    balloon1.lifetime = 180;
    blueGroup.add(balloon1);
}

//Create Green balloon.
function green2() {
    balloon2 = createSprite(0, Math.round(random(20, 370)), 10, 10);
    balloon2.addImage( greenBalloon2); 
    balloon2.velocityX = 3;
    balloon2.scale = 0.09;
    balloon2.lifetime = 180;
    greenGroup.add(balloon2);
}

//Create Pink balloon.
function pink3() {
    balloon3 = createSprite(0, Math.round(random(20, 370)), 10, 10);
    balloon3.addImage( pinkBalloon3); 
    balloon3.velocityX = 3;
    balloon3.scale = 1.2;
    balloon3.lifetime = 180;
    pinkGroup.add(balloon3);
}

//Create Red balloon.
function red4() {
    balloon4 = createSprite(0, Math.round(random(20, 370)), 10, 10);
    balloon4.addImage( redBalloon4); 
    balloon4.velocityX = 3;
    balloon4.scale = 0.09;
    balloon4.lifetime = 180;
    redGroup.add(balloon4);
}

//Create Arrow.
function spawnArrow(){
    arrow = createSprite(564,300,10,10);
    arrow.addImage(arrow1);
    arrow.scale = 0.20;
    arrow.y = bow.y;
    arrow.velocityX = -4;
    arrow.lifetime = 135;
    ArrowGroup.add(arrow);
}


//End of the Code.
