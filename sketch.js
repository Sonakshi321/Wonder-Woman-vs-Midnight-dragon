const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var sup;
var mon;

function preload() {
    bg=loadImage("sky.png");
}


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    sup = new Superhero(1300,200,200,200);

    mon = new Monster(200,100,300,300);

    ground = new Ground(600,600,1200,20);
    
    box1 = new Boxy(900,100,70,70);
    box2 = new Boxy(900,100,70,70);
    box3 = new Boxy(900,100,70,70);
    box4 = new Boxy(900,100,70,70);
    box5 = new Boxy(900,100,70,70);
    box6 = new Boxy(900,100,70,70);
    box7 = new Boxy(800,100,70,70);
    box8 = new Boxy(800,100,70,70);
    box9 = new Boxy(800,100,70,70);
    box10 = new Boxy(800,100,70,70);
    box11 = new Boxy(800,100,70,70);
    box12 = new Boxy(800,100,70,70);
    box13 = new Boxy(700,100,70,70);
    box14 = new Boxy(700,100,70,70);
    box15 = new Boxy(700,100,70,70);
    box16 = new Boxy(700,100,70,70);
    box17 = new Boxy(700,100,70,70);
    box18 = new Boxy(700,100,70,70);
    box19 = new Boxy(700,100,70,70);
    box20 = new Boxy(700,100,70,70);
   
    
    
}

function draw(){
    background(bg);
    Engine.update(engine);
    text(mouseX + "," +mouseY , mouseX,mouseY);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ground.display();

    sup.display();

    mon.display();    
}


