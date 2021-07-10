var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
//verifing speed and weight
   speed=random(223,321);
   weight=random(30,52);
   thickness=random(22,83);

//creating car,setting vel and deformating
   bullet = createSprite(50,200,50,5);
   bullet.velocityX=speed;
   bullet.shapeColor = "white"
   

//creating wall
  
   wall = createSprite(1500,200,thickness, height/2)

}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
   bullet .velocityX = 0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage<10){
     wall.shapeColor="green"
   }
   if(damage>10){
    wall.shapeColor="red"
  }
  }


  drawSprites();
}
function hasCollided(b,w){
   bulletRightEdge = b.x+b.width
   wallLeftEdge = w.x
   if(bulletRightEdge>=wallLeftEdge){
      return true
   }
return false
}