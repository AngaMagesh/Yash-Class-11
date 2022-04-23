
var trex ,trex_running,ground;
function preload(){
  //loading animation
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
 trex = createSprite (50,160,20,50);
 // giving animation to trex 
 trex.addAnimation("runner",trex_running)
 trex.scale=0.50
 ground =createSprite (200,180,400,20);
}

function draw(){
  background("white");
  //Making the Trex Jump up when i click "space" by 5 units
  if(keyDown("space")){
   trex.velocityY=-5;

  }
  // Making trex come back after jumping
  trex.velocityY=trex.velocityY+0.5;
  //making trex collide the ground
trex.collide(ground);




  drawSprites();

}
