//Andrew Cutler
//August 30,2021
//N220 34971

let posX = 150;
let posY = 150;
let size = 200;

function setup(){
    createCanvas(300, 300);
}
function draw(){
    background ("grey");
    fill("yellow");
    circle(posX, posY, size);
    fill("black");
    //circle(100,120, 20);
    //left eye
    circle(200,120,32);
    //arc(100, 175, 100, 100, 0, PI + QUARTER_PI);
    //Attempted to get the smile to work I ran out of time I will have to look into this more later

    ellipse(150, 175, 120, 30);
    //Mouth

    strokeWeight(15);
    line(130, 120, 70, 120);
    //left eye

}