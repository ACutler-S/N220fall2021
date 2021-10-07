//Andrew Cutler
//N220 - 34971
//October 7 ,2021
//Assignment 6: Object Exercises
//Animated Object- the Second in the p5 section
//----------------------------------------------------------------
/*
Create a class
Create the x,y,size,and color properties
Create the method that would draw the circle to the canvas
create and array to house multiple bubbles
Create the loop that makes multiple bubbles
Draw the Bubbles
*/

class Bubbles{
    x = Math.random() * 500;
    y = Math.random() * 400;
    size = 12;
    color = [ Math.random() *200, 150, 255];

    update(){
        noStroke();
        fill(this.color);
        circle(this.x, this.y, this.size);

        if(this.size <= 250){
            this.size = this.size +1;
        }
        if(this.size == 250){
            this.size = 0
        }
    }
}

let c = new Bubbles();
let bubbles = [];

function setup(){
    createCanvas(600, 500,);
    for(let i = 0; i < 10; i++){
        bubbles[i] = new Bubbles();
    }
}

function draw(){
    for(let i = 0; i < bubbles.length; i++){
        bubbles[i].update();
    }
}