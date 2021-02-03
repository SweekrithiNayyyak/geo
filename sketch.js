
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var ham;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new ground(400,685)
ham=new hamer(200,200)
tone1=new stone(300,100)
band=new strubber(600,500)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  ham.display();
  tone1.display()
  band.display();
  drawSprites();
 
}



