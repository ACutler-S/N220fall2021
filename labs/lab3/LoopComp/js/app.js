//Andrew Cutler
//N220 - 34971
//September 16 ,2021
//Assignment 3: Loops
//Loop Comp
//----------------------------------------------------------------

//Idea: create a basic loop and use the output of that loop to manipulate perameters of different shapes


function setup(){
    createCanvas(500,500);
//Creation of the canvas
    for(let i = 0; i < 100; i++){
//Creation of a basic loop
    circle(250 + i,250,10);
//draws circle in the right direction

    circle(250, 250 + i, 10);
//draws circle in the down or positive y direction

    circle(250-i,250,10);
//draws circle in the left direction
    circle(250, 250-i,10);
//draws circle in the up or negative y direction
    circle(250 % i, 250, 10);
//draws circle in the far left side
    circle(250, 250 % i, 10);
//draws circle in the far upper side
    circle(250,250,10);
//draws circle in the base circel in the middle/ origin
    rect(10,10, 10 * i, 10);
//upper bar on the top of the canvas
    rect(10, 10* i, 10, 10);
//bar on the left side of the canvas
    rect(10* i,10*i,10*i,10*i);
//increasing size of the square that goes across the middle

    }
}

function draw(){

}