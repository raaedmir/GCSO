var car,wall;
var speed,weight;
var def;

function setup() {
  createCanvas(1600,200);
  car=createSprite(50, 100, 50, 30);
  wall=createSprite(1500,100,30,100)
  speed=random(55,90);
  weight=random(400,1500);
car.velocityX=speed;
car.shapeColor="#342312";
}

function draw() {
  background("#347685");  
 
 
wall.shapeColor="black";

console.log(def);
if(car.isTouching(wall)){
car.velocityX=0;
def=0.5*weight*speed*speed/22500;
if(def<100){
  car.shapeColor=color(0,255,0);

}
if(def>100 && def<180){
  car.shapeColor=color(230,230,0);

}
if(def>180){
  car.shapeColor=color(255,0,0);
}
}
  drawSprites();
}