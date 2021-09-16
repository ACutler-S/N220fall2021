function setup(){
    createCanvas(500,500);

    for(let i = 0; i < 100; i++){
    circle(250 + i,250,10);
    circle(250, 250 + i, 10);
    circle(250-i,250,10);
    circle(250, 250-i,10);
    circle(250 % i, 250, 10);
    circle(250, 250 % i, 10);
    circle(250,250,10);

    rect(10,10, 10 * i, 10);
    rect(10, 10* i, 10, 10);
    rect(10* i,10*i,10*i,10*i);
    }
}

function draw(){

}