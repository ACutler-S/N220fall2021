//Andrew Cutler
//N220 - 34971
//September 8 ,2021
//Assignment 2: Animation and Conditional Operators
//Counter
//----------------------------------------------------------------

//Idea:
//Create a variable that holds the value 0
//Incriment said variable by 1 for every frame
//Output that variable to the console


function setup(){
    createCanvas(400, 400,);
}
//function setup is standard and nothing really interesting is here

let frame = 0;
//Create the variable that holds 0

function draw(){
    background("green");
//Green background so you have something to look at and are not staring at a white screen
    frame++;
//Incrimentation of variable
    console.log(frame);
//Output to the console
}