//Andrew Cutler
//N220 - 34971
//September 23 ,2021
//Assignment 4: Arrays
//Snake
//----------------------------------------------------------------

//These are the arrays that hold the snakes body limits and the color of the sections
let snakeBodyX = [0,0,0,0,0,0,0,0,0,0];
let snakeBodyY = [0,0,0,0,0,0,0,0,0,0];
let bodyColor = ["#1f15d3", "#6b8a96","#b3b699","#b3b699","#b3b699","#ba032d","#e1ea85","#f3cfb0","#dac9f7","#cbb3e1",];


//Function setup.... Still nothing new
function setup(){
    createCanvas(500, 500,);
}

//Draw function this holds everything
function draw(){

//Sets the background to a grass color
    background("#34eb80");

//The push and shift commands that makes the snake follow the mouse and hold a limit to 10 circles instead of drawing an infinite amount - illustrated in the lecture video
    snakeBodyX.push(mouseX);
    snakeBodyX.shift();
    snakeBodyY.push(mouseY);
    snakeBodyY.shift();

//The loop that draws the actual snake to the canvas and sets the body sections to the colors
    for (let i = 0; i < snakeBodyX.length; i++){
        fill(bodyColor[i]);
        circle(snakeBodyX[i],snakeBodyY[i], 20);
    }
}