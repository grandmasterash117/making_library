var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
fixedRect=createSprite(200,200,50,80);
movingRect=createSprite(400,200,50,80);
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
movingRect.velocityX=-2;
  fixedRect.velocityX=2;
}

function draw() {
  background(255,255,255);  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  
  
bounceOff(movingRect,fixedRect);

  drawSprites();
}


