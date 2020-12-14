var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){

monkey_running =     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");     }

function setup() {
  
  monkey = createSprite(50,50,0,0);
  monkey.addAnimation("sprite_0.png", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(900,250,900,20);
  ground.velocityX=-3;
  ground.x = ground.width /2;  }
  
function draw() {
   background("lightblue");
   stroke("black");
   textSize(15);
   survivalTime = survivalTime +                              Math.round(getFrameRate()/62);
   fill("black");
   text ("survivalTime:" + survivalTime,100,50)
  
   if(keyDown("space")&& monkey.y >= 100) {
   monkey.velocityY = -12;       }
  
   if (ground.x < 0){
   ground.x = ground.width/2;  }
  
   monkey.velocityY = monkey.velocityY + 0.8
 
   FoodGroup = new Group();
   obstacleGroup = new Group();
   
   monkey.setCollider("circle", 1, 0, 300);
   //monkey.debug = true; 
  
  monkey.collide(ground);
  obstacleGroup.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  
  monkey.depth=7;
  obstacleGroup.depth=7; 
  
if(monkey.isTouching(obstacleGroup)){
  monkey.velocityX=0;
  ground.velocityX=0;
  obstacleGroup.velocityXEach=0; }
    
  drawSprites();  
  obstacleGroup.collide(monkey); }
  
function spawnObstacles(){
 if (frameCount % 80 === 0){
 var obstacle = createSprite(250,222,20,50);
 obstacle.addImage(obstacleImage)
 obstacle.velocityX = -3;
   
 //assign scale and lifetime to the obstacle           
 obstacle.scale = 0.1 
 obstacle.lifetime = 300;
   
 //assign collider to the obstacles
 obstacle.setCollider("circle", 1, 0, 300);
 //obstacle.debug = true; 
  
 //add each obstacle to the group
 obstacleGroup.add(obstacle);  }  }

 function spawnBanana() {
 //write code here to spawn the clouds
 if (frameCount % 80 === 0) {
 var banana1 = createSprite(600,120,40,10);
 banana1.y = Math.round(random(80,120));
 banana1.addImage(bananaImage);
 banana1.scale = 0.1;
 banana1.velocityX = -3;

 //assign lifetime to the variable
 banana1.lifetime = 200;
 FoodGroup.add(banana1);     }  }

