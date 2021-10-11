//Create a paddle: a rectangle that is controled by "W" and "S"
// When the keys are pressed move the paddle up and down
//Create a ball that starts in the middle of the screen and moves to the left
//Ball can bounce off the top bottom and left of the screen
//ball bounces off the paddle (use hitTestPoint)
//If ball goes to the right of the screen have it reset to the middle and set its velocity 


class Paddle{
    color = 'red';
    posX = 200;
    posY = 600;

    update(){
        //noStroke();
        fill(this.color);
        rect(this.posX, this.posY, 10, 150);
    }

    /*wPressed(){
        if (keyCode === UP_ARROW){

            rect(this.posX, this.posY += 5, this.width, this.height);
        }else if(keyCode === DOWN_ARROW){
            rect(this.posX, this.posY -=5, this.width,this.height);
        }
    }*/
}
let p = new Paddle();


function setup(){
    createCanvas(800, 500,);
    
}

function draw(){
   // background(216, 224, 237);
        p.update();
    
    console.log(p);
}