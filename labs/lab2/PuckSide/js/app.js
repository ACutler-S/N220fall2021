//Andrew Cutler
//N220 - 34971
//September 8 ,2021
//Assignment 2: Animation and Conditional Operators
//Puck Side
//----------------------------------------------------------------

//Idea:
//First create the circle and have it follow the mouse using mouseX and mouseY
//Create the if else statements that will control the color change aspect

function setup(){
    createCanvas(400, 300);   
}
//Creates the Canvas WOOOOAHHH breaking some ground here!

function draw(){
    //background("grey");
    circle(mouseX,mouseY, 30);
//Creates the circle and makes it track the mouse


    if(mouseX >= 200){
        fill(196, 35, 24);
    }else {
        fill(10, 181, 204);
        }
//Creates the if else statements that make the color change:
//If the circle has an x coord greater or equal to 200, then fill it in red
//Else, fill the circle in with blue
}