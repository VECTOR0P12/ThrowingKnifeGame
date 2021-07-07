

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var bulletImg, fistImg, pistolImg, throwingknifeImg;
var gameState;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


  

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  bulletImg = loadImage("bullet.png");
  fistImg = loadImage("fist.png");
  pistolImg = loadImage("pistol.png");
  throwingknifeImg = loadImage("throwingknife.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(fistImg); 
  bow.scale = 0.1;
  
   score = 0
 
arrowGroup= new Group();
blueGroup= new Group();
greenGroup= new Group();
 redGroup=new Group();
 pinkGroup=new Group();
  
  
}

function draw() {

  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
 
  
if(gameState===PLAY){
  if (keyDown("space")) {
    createArrow();
  }
    var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
if(score > 30){
  gameState = END;
} 
}else if(gameState===END){
    arrow.velocityX = 0;
    red.velocityY = 0;
    green.velocityY = 0;
    blue.velocityY = 0;
    pink.velocityY = 0;
   
}
  
  //creating continous enemies
  
  

  
    
     if (arrowGroup.isTouching(blueGroup)){
  blueGroup.destroyEach();
  arrowGroup.destroyEach();
  score =score+1;

  }
  
  
   if (arrowGroup.isTouching(greenGroup)){
  greenGroup.destroyEach();
  arrowGroup.destroyEach();
  score =score+1;
   }
     
    if (pinkGroup.isTouching(arrowGroup)){
  pinkGroup.destroyEach();
  arrowGroup.destroyEach();
  score =score+1;
    } 
      
    if (redGroup.isTouching(arrowGroup)){
  redGroup.destroyEach();
  arrowGroup.destroyEach();
  score =score+1;
    }
      
  drawSprites();
    text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);
 
  return red
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue);

  return blue;
 
  
 
}


function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green);
  
return green;
  }
    


function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkGroup.add(pink);
  
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(throwingknifeImg);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.1;
   arrowGroup.add(arrow);
  
  
  return arrow;  
   
 
  

 } 