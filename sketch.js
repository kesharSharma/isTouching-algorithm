//declared variables
var movingRect, fixedRect; 
function setup() {

  createCanvas(800,400);
  //created a moving rect sprite
  movingRect= createSprite(400, 200, 50, 50);
  movingRect.shapeColor="black";
  movingRect.debug =true;
  
  //created a fixed rect sprite
  fixedRect= createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="red";
  fixedRect.debug =true;

}

function draw() {
  //to give color to the background
  background("powderblue");
  
  //to move the moving rect with the mouse
  movingRect.x= mouseX;
  movingRect.y = mouseY;
  
  if (movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 
    &&movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 ){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="black";
    fixedRect.shapeColor="red";
  }
  
  drawSprites();
}