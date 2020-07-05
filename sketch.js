var play =1
var end =0;
var gameState =play;
var runner;
var ground;
var obstacle;
var edges;
var ObstaclesGroup;
function setup(){
  createCanvas(600,200);
  runner = createSprite(35,150,20,20);
  runner.shapeColor= 'white';
  runner.setCollider("rectangle",0,0,35,40)
  ground =createSprite(200,200,800,20);
  ground.shapeColor ='white';
   edges = createEdgeSprites();
  ObstaclesGroup =createGroup();
}
function draw(){
  background('black')
  if(gameState === play){
   if(keyDown("space") && runner.y >= 30){
    runner.velocityY = -12 ;
  }
  runner.velocityY = runner.velocityY+1;
    spawnObs();
}
runner.collide(edges[3])
  drawSprites();
}
function spawnObs(){
  if(frameCount%90===0){
  var obstacle =createSprite(600,155,20,70);
  obstacle.velocityX = -3;
  obstacle.shapeColor ='white';
  ObstaclesGroup.add(obstacle);
   }
}