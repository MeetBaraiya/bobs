const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  bobObject1, bobObject2, bobObject3, bobObject4,  bobObject5,roof;
var rope1,rope2,rope3,rope4,rope5;
var backgroundImg;


function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,250,400,30);
	
	
	bobObject1 = new Bob (440,470,80);
	bobObject2 = new Bob (520,470,80);
	bobObject3 = new Bob (600,470,80);
	bobObject4 = new Bob (680,470,80);
	bobObject5 = new Bob (760,470,80);

	rope1=new Rope (bobObject5. body, roof . body, 78*2, 0);
	rope2=new Rope (bobObject4. body, roof . body, 38*2, 0);
	rope3=new Rope (bobObject3. body, roof . body, -0*2, 0);
	rope4=new Rope (bobObject2. body, roof . body, -38*2, 0);
	rope5=new Rope (bobObject1. body, roof . body, -78*2, 0);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);
  
  roof.display();


  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display(); 
  rope5.display();

    bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:0.3,y:-0});
		
	}
	
}

