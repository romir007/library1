var fixed1,moving1;

var x1,x2;

function setup() {
  createCanvas(800,400);
  fixed1 = createSprite(400,200,60,50);
  fixed1.shapeColor="blue";
  
  
  
 moving1= createSprite(200, 200, 50, 50);
 moving1.shapeColor="blue"; 
 x1 = createSprite(400,100,60,50);
 x1.shapeColor="blue";
 x1.velocityX=-3;
 
 
x2= createSprite(200, 100, 50, 50);
x2.shapeColor="blue"
 x2.velocityX=2;
}

function draw() {
  background(255,255,255);  
 bounceOff(x1,x2);
 
  moving1.y=mouseY ;
 moving1.x=mouseX;
if( isTouching(fixed1,moving1)){
moving1.shapeColor="red";
fixed1.shapeColor="red";
}
else {
  moving1.shapeColor="blue";
fixed1.shapeColor="blue";
}
 drawSprites();
}

