const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var box, box1;

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();
    box = new Box(200, 200, 50, 50);
    box1 = new Box(220, 100, 50, 50);


}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    box.display();
    box1.display();
}