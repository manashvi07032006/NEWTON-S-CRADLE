const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Bob1, Bob2, Bob3, Bob4, Bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Bob1 = new Bob(440);
	Bob2 = new Bob(520);
	Bob3 = new Bob(600);
	Bob4 = new Bob(680);
	Bob5 = new Bob(760);

	roof = new Roof();
	
	rope1 = new Rope(Bob1.body, roof.body, -160, 0); 
	rope2 = new Rope(Bob2.body, roof.body, -80, 0);
	rope3 = new Rope(Bob3.body, roof.body, 0, 0);
	rope4 = new Rope(Bob4.body, roof.body, 80, 0);
	rope5 = new Rope(Bob5.body, roof.body, 160, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(153, 255, 0);
 
  textSize(40);
  fill(0, 0, 204);
  text("Press the up arrow key to move the left-most bob", 140, 550);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(Bob1.body, Bob1.bodyposition,{x: -500, y: 500})
  }
}