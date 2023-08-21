
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine
let world
var plane
var block1
var block2
var block3


function setup() {
	createCanvas(600, 500);

	engine = Engine.create();
	world = engine.world;

  var plane_options = {
	isStatic : true
  }
	
  var block1_options = {
    restitution : 0.5,
    frictionAir : 0,
	friction : 0.02
  }

  var block2_options = {
    restitution : 0.7,
    frictionAir : 0.1,
	friction : 0.01
  }

  var block3_options = {
    restitution : 0.01,
    frictionAir : 0.3,
	friction : 1
  }

  plane = Bodies.rectangle(300,490,600,30,plane_options);
  World.add(world,plane);
	
  block1 = Bodies.circle(300,50,50,block1_options);
  World.add(world,block1);

  block2 = Bodies.rectangle(100,40,120,80,block2_options);
  World.add(world,block2);

  block3 = Bodies.rectangle(450,50,100,100,block3_options);
  World.add(world,block3);

  rectMode(CENTER);
  Engine.run(engine);
  
}


function draw() {
  background(40);
  Engine.update(engine)

  rect(plane.position.x,plane.position.y,600,30);
  ellipse(block1.position.x,block1.position.y,100);
  rect(block2.position.x,block2.position.y,120,80);
  rect(block3.position.x,block3.position.y,100,100);

  drawSprites();
 
}



