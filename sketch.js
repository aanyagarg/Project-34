const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
  monster1 = loadImage("sprites/images/Monster-01.png")
  monster2 = loadImage("sprites/images/Monster-02.png")
  superhero1 = loadImage("sprites/images/Superhero-01.png")
  superhero2 = loadImage("sprites/images/Superhero-02.png")
  backgroundImg = loadImage("sprites/images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
    world = engine.world;

    hero1=new Hero(2000,500)
    ground=new Ground(300,800)
    rope1 = new Rope(hero1.body,{x:2000, y:500});
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)

  hero1.display();
  ground.display();
  rope1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
}

