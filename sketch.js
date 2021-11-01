/*
var fixed, moving;

function setup() {
  createCanvas(800,400);
 fixed = createSprite(400, 200, 50, 50);
 fixed.shapeColor = "red"
  moving = createSprite(200,300,40,40);
  moving.shapeColor = "red"

}

function draw() {
  background(0);
  moving.x = World.mouseX
  moving.y = World.mouseY
  console.log(moving.x - fixed.x)
  if(moving.x-fixed.x<fixed.width/2 + moving.width/2
    && fixed.x-moving.x<fixed.width/2 + moving.width/2
    &&moving.y-fixed.y<fixed.height/2 + moving.height/2
    && moving.y-fixed.y<fixed.height/2 + moving.height/2
    ){
  fixed.shapeColor = "blue"
  moving.shapeColor = "blue"
  }
  else{fixed.shapeColor = "red";
  moving.shapeColor = "red";
}  
  drawSprites();
}
*/
//bounce-offalgorithm
var fixed, moving;

function setup() {
  createCanvas(1200,800);
 fixed = createSprite(400, 100, 50, 50);
 fixed.shapeColor = "red"
 fixed.velocityY= +5
  moving = createSprite(400,800,40,40);
  moving.shapeColor = "red"
  moving.velocityY = -5
}

function draw() {
  background(0);
  console.log(moving.x - fixed.x)
  if(moving.x-fixed.x<fixed.width/2 + moving.width/2
    && fixed.x-moving.x<fixed.width/2 + moving.width/2)
    {
moving.velocityX=moving.velocityX*(-1)
fixed.velocityX=fixed.velocityX*(-1)
    }
    if(moving.y-fixed.y<fixed.height/2 + moving.height/2
    && moving.y-fixed.y<fixed.height/2 + moving.height/2
    ){
moving.velocityY=moving.velocityY*(-1)
fixed.velocityY=fixed.velocityY*(-1)
  }

  
  drawSprites();
}