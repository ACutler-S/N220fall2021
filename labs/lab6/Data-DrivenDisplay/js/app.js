//Andrew Cutler
//N220 - 34971
//October 7 ,2021
//Assignment 6: Object Exercises
//Animated Object- Data Driven Display
//----------------------------------------------------------------

/*
    Create an object
    Create the properties of that object
    Draw it to the page
*/

let object = {
    x: Math.random()* 500,
    y: Math.random()* 400,
    size: 60,
    color:  [ Math.random() * 255, Math.random() *255, Math.random() *255]

};

function setup(){
    createCanvas(600, 500, );
}
function draw(){
    noStroke();
    background("#92c491");
    fill(object.color);
    circle(object.x, object.y, object.size);
    
}