//Andrew Cutler
//N220 - 34971
//September 8 ,2021
//Assignment 2: Animation and Conditional Operators
//World Wrap
//----------------------------------------------------------------

//Idea:
//Create a circle that moves to the right at a speed of 5
//When it gets to the edge of the canvas have it reset to the original point

function setup(){
    createCanvas(800, 600);
}
//Creates the Canves, this one through me for a loop since it was 800 by 600 =)


let xPos = 0;
//Creates the variable that holds the initial speed of the ball

function draw(){
    background("black");
    fill("blue");
    xPos += 5;
    circle(xPos,300,20);
//Creates the circle and incriments the speed of the circle by 5

    if(xPos >= 800){
        xPos = 0;
    }
//Creates the if statement that makes the ball reset after hitting the edge of the screen
}