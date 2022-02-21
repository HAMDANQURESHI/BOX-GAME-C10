var message
var box


function setup() {
  createCanvas(400,400);
   box=createSprite(200,200,20,20)
   message="hello";
}

function draw() 
{
  background(30);

  if(keyDown("right")){
  box.x=box.x+5
  }
  if(keyDown("left")){
    box.x=box.x-5
  }
  if(keyIsDown(UP_ARROW)){
    box.y=box.y-5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y+5
  }
console.log(message)
drawSprites()
}




