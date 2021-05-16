var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
   music=loadSound("music.mp3")
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(695,580,170,30);
    block4.shapeColor = "black";


    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=-5;
    ball.velocityY=5;

    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
   
    ball.bounceOff(edges);

    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.velocityX=ball.velocityX*-1
        ball.velocityY=ball.velocityY*-1
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX=ball.velocityX*-1
        ball.velocityY=ball.velocityY*-1
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        ball.velocityX=ball.velocityX*-1
        ball.velocityY=ball.velocityY*-1
       
    }
    if(block4.isTouching(ball)){
        ball.shapeColor = "black";
        ball.velocityX=ball.velocityX*-1
        ball.velocityY=ball.velocityY*-1
       
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
