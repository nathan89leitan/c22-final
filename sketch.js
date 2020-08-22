var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	packageSprite=createSprite(width/2, 200, 5, 5);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	box1 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	box2 = Bodies.rectangle(300, 600, 200, 20 , {isStatic:true} );
    box3 = Bodies.rectangle(500, 600, 200, 20 , {isStatic:true} );
	
 	World.add(world, ground);
	 World.add(world, box1);
	 World.add(world, box2);
	 World.add(world, box3);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,200,20)
  rect(box2.position.x,box2.position.y,20,120)
  rect(box3.position.x,box3.position.y,20,120)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false)
	
  }
}



