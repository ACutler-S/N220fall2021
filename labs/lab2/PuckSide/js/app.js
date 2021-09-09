function setup(){
    createCanvas(400, 300);   
}



function draw(){
    //background("grey");
    circle(mouseX,mouseY, 30);3

    if(mouseX >= 200){
        fill("red");
    }else {
        fill("blue");
    }
}