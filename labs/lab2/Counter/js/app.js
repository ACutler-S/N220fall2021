function setup(){
    frameRate(60);
    textSize(30);
    createCanvas(400, 400,);
}
function draw(){
    background("green");
    text(frameCount, width / 2, height / 2);
}