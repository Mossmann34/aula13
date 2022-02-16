var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var cactu1
var cactu2
var cactu3
var cactu4
var cactu5
var cactu6

var score = 0

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  cactu1 = loadImage("obstacle1.png");
  cactu2 = loadImage("obstacle2.png");
  cactu3 = loadImage("obstacle3.png");
  cactu4 = loadImage("obstacle4.png");
  cactu5 = loadImage("obstacle5.png");
  cactu6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  score = score + Math.round(frameCount/60);
  text("Pontos: " + score, 500,50);
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  
  spawnObstacles();

  drawSprites();

  
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //atribua tempo de vida à variável
    cloud.lifetime = 620/3
    

    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles(){
  if (frameCount % 60 === 0) {
  var cactus = createSprite(600,165,10,40)

  cactus.velocityX = -6;

  var rando = Math.round(random(1,6));

  console.log(rando);

  switch(rando) {
    case 1: cactus.addImage(cactu1);  
            break;
    case 2: cactus.addImage(cactu2);
            break;
    case 3: cactus.addImage(cactu3);
            break;
    case 4: cactus.addImage(cactu4);
            break;
    case 5: cactus.addImage(cactu5);
            break;
    case 6: cactus.addImage(cactu6);
            break;
    default: break;
  }
  
   cactus.scale = 0.8;

   cactus.lifetime = 620/6;

  }  
}
