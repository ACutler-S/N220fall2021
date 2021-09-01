let size = 10;

function setup(){
    createCanvas(600, 800);
}

function draw(){
    background("grey");
    circle(mouseX, mouseY, size);

   // mouseClicked();
}

function mouseClicked(){
    size += 10;

    if(size === 60){
        size = 10;
    }
}