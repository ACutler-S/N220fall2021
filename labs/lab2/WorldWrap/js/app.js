function setup(){
    createCanvas(800, 600);
}

let xPos = 0;

function draw(){
    background("black");
    fill("blue");
    xPos += 5;
    circle(xPos,300,20);

    if(xPos >= 800){
        xPos = 0;
    }
}