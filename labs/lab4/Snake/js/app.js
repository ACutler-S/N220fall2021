let snakeBodyX = [0,0,0,0,0,0,0,0,0,0];
let snakeBodyY = [0,0,0,0,0,0,0,0,0,0];
let bodyColor = ["#1f15d3", "#6b8a96","#b3b699","#b3b699","#b3b699","#ba032d","#e1ea85","#f3cfb0","#dac9f7","#cbb3e1",];

function setup(){
    createCanvas(500, 500,);
}

function draw(){
    background("#34eb80");
    snakeBodyX.push(mouseX);
    snakeBodyX.shift();
    snakeBodyY.push(mouseY);
    snakeBodyY.shift();
    for (let i = 0; i < snakeBodyX.length; i++){
        fill(bodyColor[i]);
        circle(snakeBodyX[i],snakeBodyY[i], 20);
    }
}