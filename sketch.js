var bg;
var wall1,wall2,wall3,wall4,wall5;
var wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15;
var wall16,wall17,wall18,wall19,wall20;
var wal21,wall22,wall23,wall24;
var wal25,wall26,wall27,wall28;
var wall29,wall30,wall31,wall32;
var wal33,wall34,wall35,wall36;
var wall33,wall34,wall35,wall36;
var wall37,wall38,wall39,wall40;
var wall41,wall42,wall43,wall44;
var wall45;
 var wallImage,wallImage2;
var mouse;
var mouseImage;
var wallsGroup;
var cheese1,cheese2,cheese3,cheese4,cheese5;
var cheese6,cheese7,cheese8,cheese9,cheese10;
var cheeseImage;
var score=0;
var portal,portal2;
var edges;
var lives = 5;
function preload() {
  wallImage=loadImage("wood1.png");
 wallImage2=loadImage("wood2.png");
 cheeseImage=loadImage("Cheese.png");
mouseImage=loadImage("mouse.png");
}


function setup() {
  createCanvas(800,600);

wallsGroup= new Group();

portal=createSprite(0,330,20,40);
portal.shapeColor="purple";


portal2=createSprite(800,330,20,40);
portal2.shapeColor="purple";

mouse=createSprite(20,70,20,20);
mouse.addImage(mouseImage);
mouse.scale=0.2

cheese1 = createSprite(75,160,20,20);
cheese1.addImage(cheeseImage);
cheese1.scale=0.2;

cheese2 = createSprite(30,330,20,20);
cheese2.addImage(cheeseImage);
cheese2.scale=0.2;


cheese3 = createSprite(265,185,20,20);
cheese3.addImage(cheeseImage);
cheese3.scale=0.2;

cheese4 = createSprite(205,340,20,40);
cheese4.addImage(cheeseImage);
cheese4.scale=0.2;


cheese5 = createSprite(330,60,20,20);
cheese5.addImage(cheeseImage);
cheese5.scale=0.2;


cheese6 = createSprite(700,330,20,20);
cheese6.addImage(cheeseImage);
cheese6.scale=0.2;


cheese7 = createSprite(20,400,20,40);
cheese7.addImage(cheeseImage);
cheese7.scale=0.2;


cheese8 = createSprite(400,400,20,40);
cheese8.addImage(cheeseImage);
cheese8.scale=0.2;


cheese9 = createSprite(760,400,20,40);
cheese9.addImage(cheeseImage);
cheese9.scale=0.2;


cheese10 = createSprite(620,225,20,40);
cheese10.addImage(cheeseImage);
cheese10.scale=0.2;



  wall1 =createSprite(150, -20, 20, 120);
  wall1.addImage(wallImage2);
  wallsGroup.add(wall1);
  wall2 =createSprite(0, 115, 135, 20);
  wall2.addImage(wallImage);
  wallsGroup.add(wall2)
  wall3 =createSprite(100, 10, 120, 20);
  wall3.addImage(wallImage);
  wallsGroup.add(wall3)
  wall4 =createSprite(235, -20, 20, 0)
  wall4.addImage(wallImage2);
  wallsGroup.add(wall4)
  wall5 =createSprite(45, 205, 20, 200);
  wall5.addImage(wallImage2);
  wallsGroup.add(wall5)
  wall6 =createSprite(100, 210, 60, 20);
  wall6.addImage(wallImage);
  wallsGroup.add(wall6)
  wall7 =createSprite(220, 210, 20, 20);
  wall7.addImage(wallImage);
  wall7.scale=0.6;
  wallsGroup.add(wall7)
  wall8 =createSprite(235, 190, 20, 50);
  wall8.addImage(wallImage2);
  wall8.scale=0.6;
  wallsGroup.add(wall8)
  wall9 =createSprite(45, 210,20, 100);
  wall9.addImage(wallImage2);
  wallsGroup.add(wall9)
  wall10 =createSprite(-48, 300, 60, 20);
  wall10.addImage(wallImage);
  wallsGroup.add(wall10)
  wall11 =createSprite(3, 360, 150, 20);
  wall11.addImage(wallImage);
  wallsGroup.add(wall11)
  wall12 =createSprite(200, 365, 70, 20);
  wall12.addImage(wallImage);
  wall12.scale=0.6;
  wallsGroup.add(wall12)
  wall13 =createSprite(100, 310, 20, 80);
  wall13.addImage(wallImage2)
  wall13.scale=0.6;
  wallsGroup.add(wall13)
  wall14 =createSprite(145, 310, 20, 90);
  wall14.addImage(wallImage2);
  wall14.scale=0.6;
  wallsGroup.add(wall14)
  wall15 =createSprite(235, 365, 20, 90);
  wall15.addImage(wallImage2);
  wall15.scale=0.6;
  wallsGroup.add(wall15)
  wall16 =createSprite(140, 435, 90, 20);
  wall16.addImage(wallImage);
  wallsGroup.add(wall16)
  wall17 = createSprite(300,10,20,20);
  wall17.addImage(wallImage);
  wallsGroup.add(wall17)
  wall18 = createSprite(300,30,20,20);
wall18.addImage(wallImage2);
wallsGroup.add(wall18)
wall19 = createSprite(730,360,20,20);
wall19.addImage(wallImage);
wallsGroup.add(wall19);
wall20 = createSprite(760,300,20,20);
wall20.addImage(wallImage);
wallsGroup.add(wall20);
wall21 = createSprite(390,120,20,20);
wall21.addImage(wallImage);
wallsGroup.add(wall21);
wall22 = createSprite(385,160,20,20);
wall22.addImage(wallImage2);
wall22.scale=0.5;
wallsGroup.add(wall22);
wall23 = createSprite(230,320,20,20);
wall23.addImage(wallImage);
wall23.scale=0.5;
wallsGroup.add(wall23);
wall24 = createSprite(290,320,20,20);
wall24.addImage(wallImage);
wall24.scale=0.5;
wallsGroup.add(wall24);
wall25 = createSprite(340,275,20,20);
wall25.addImage(wallImage2);
wall25.scale=0.5;
wallsGroup.add(wall25);
wall26 = createSprite(340,435,20,20);
wall26.addImage(wallImage);
wallsGroup.add(wall26);
wall27 = createSprite(435,395,20,20);
wall27.addImage(wallImage2);
wall27.scale=0.5;
wallsGroup.add(wall27);
wall28 = createSprite(590,360,20,20);
wall28.addImage(wallImage);
wallsGroup.add(wall28);
wall29 = createSprite(435,300,20,20);
wall29.addImage(wallImage2);
wall29.scale=0.5;
wallsGroup.add(wall29);
wall30 = createSprite(530,250,20,20);
wall30.addImage(wallImage);
wallsGroup.add(wall30);
wall31 = createSprite(580,250,20,20);
wall31.addImage(wallImage);
wallsGroup.add(wall31);
wall32 = createSprite(665,340,20,20);
wall32.addImage(wallImage2);
wall32.scale=0.5;
wall32.velocityX=-2.5;
wallsGroup.add(wall32);
wall33= createSprite(671,160,20,20);
wall33.addImage(wallImage2);
wallsGroup.add(wall33);
wall34= createSprite(671,-40,20,20);
wall34.addImage(wallImage2);
wallsGroup.add(wall34);
wall35= createSprite(490,130,20,20);
wall35.addImage(wallImage2);
wall35.scale=0.7;
wallsGroup.add(wall35);
wall35= createSprite(530,436,20,20);
wall35.addImage(wallImage);
wallsGroup.add(wall35);
wall36= createSprite(700,436,20,20);
wall36.addImage(wallImage);
wallsGroup.add(wall36);
wall37= createSprite(-60,435,20,20);
wall37.addImage(wallImage);
wallsGroup.add(wall37);
wall38= createSprite(310,365,20,20);
wall38.addImage(wallImage);
wall38.scale=0.5;
wallsGroup.add(wall38);
wall39= createSprite(565,160,20,20);
wall39.addImage(wallImage2);
wallsGroup.add(wall39);
wall40= createSprite(780,250,20,20);
wall40.addImage(wallImage);
wallsGroup.add(wall40);
wall41 =createSprite(450, 10, 120, 20);
  wall41.addImage(wallImage);
  wallsGroup.add(wall41)
  wall42 =createSprite(650, 10, 120, 20);
  wall42.addImage(wallImage);
  wallsGroup.add(wall42)
  wall43 =createSprite(800, 10, 120, 20);
  wall43.addImage(wallImage);
  wallsGroup.add(wall43)
  wall44= createSprite(780,70,20,20);
  wall44.addImage(wallImage);
  wallsGroup.add(wall44);
  wall45= createSprite(780,160,20,20);
  wall45.addImage(wallImage);
  wallsGroup.add(wall45);
}

function draw() {
  background("green");  
  textSize(20)
  fill("cyan");
  text("Lives:"+lives ,50 ,570 );
   edges =createEdgeSprites();
  mouse.bounceOff(edges);
  textSize(20);
  fill("cyan");
  text("Score: "+ score, 50,550);
 
wall32.bounceOff(wall27);
wall32.bounceOff(wall20);

if (keyDown("UP_ARROW")) {
  mouse.y=mouse.y-3.5;
mouse.velocityX=0;
}


if (keyDown("DOWN_ARROW")) {
  mouse.y=mouse.y+3.5;
mouse.velocityX=0;
}


if (keyDown("RIGHT_ARROW")) {
  mouse.velocityY=0;
mouse.x=mouse.x+3.5;
}


if (keyDown("LEFT_ARROW")) {
  mouse.velocityY=0;
mouse.x=mouse.x-3.5;
}
 
if(cheese1.isTouching(mouse)){
  score=score+1;
  cheese1.destroy();
}
if(cheese2.isTouching(mouse)){
  score=score+1;
  cheese2.destroy();
}


if(cheese3.isTouching(mouse)){
  score=score+1;
  cheese3.destroy();
}
if(cheese4.isTouching(mouse)){
  score=score+1;
  cheese4.destroy();
}
if(cheese5.isTouching(mouse)){
  score=score+1;
  cheese5.destroy();
}
if(cheese6.isTouching(mouse)){
  score=score+1;
  cheese6.destroy();
}
if(cheese7.isTouching(mouse)){
  score=score+1;
  cheese7.destroy();
}
if(cheese8.isTouching(mouse)){
  score=score+1;
  cheese8.destroy();
}


if(cheese9.isTouching(mouse)){
  score=score+1;
  cheese9.destroy();
}
if(cheese10.isTouching(mouse)){
  score=score+1;
  cheese10.destroy();
}
if(wallsGroup.isTouching(mouse)){
mouse.x=20;
mouse.y=70;
mouse.velocityX=0;
mouse.velocityY=0;
lives=lives-1;
}
if(mouse.isTouching(portal)){
mouse.x=715;
mouse.y=330;

}
if(mouse.isTouching(portal2)){
  mouse.x=50;
  mouse.y=330;
}

if(score===10){
  mouse.velocityX=0;
  mouse.velocityY=0;
  text("YOU WIN");

}
if(lives===0){
mouse.velocityX=0;
mouse.velocityY=0;
textSize(20)
fill("cyan")
text("Game Over",345,235)

}



  drawSprites();
}