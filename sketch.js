var fixedRect,movingRect;
var gameObj1, gameObj2, gameObj3, gameObj4;
function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(600,200,50,80);
movingRect = createSprite(400,200,80,30);
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
gameObj1 = createSprite(100,100,50,50);
gameObj1.shapeColor = "green";
gameObj2 = createSprite(200,400,50,50);
gameObj2.shapeColor = "green";
gameObj3 = createSprite(200,450,50,50);
gameObj3.shapeColor = "green";
gameObj4 = createSprite(400,200,50,50);
gameObj4.shapeColor = "green";
gameObj2.velocityY = -5;
  gameObj3.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  
  if(isTouching(movingRect, gameObj1)  ) {
    gameObj1.shapeColor = "red";
    movingRect.shapeColor = "red"; 
  }
  else{
    gameObj1.shapeColor = "green";
    movingRect.shapeColor = "green";
}
bounceOff(gameObj2,gameObj3);
  

  
  drawSprites();
}
