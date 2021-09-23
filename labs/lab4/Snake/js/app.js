let snakeBodyX = [0,0,0,0,0,0,0,0,0,0];
let snakeBodyY = [0,0,0,0,0,0,0,0,0,0];

function setup(){
    createCanvas(500, 500,);
}

function draw(){
    background(50,);
    snakeBodyX.push(mouseX);
    snakeBodyX.shift();
    snakeBodyY.push(mouseY);
    snakeBodyY.shift();
    for (let i = 0; i < snakeBodyX.length; i++){

        circle(snakeBodyX[i],snakeBodyY[i], 20);
    }
}