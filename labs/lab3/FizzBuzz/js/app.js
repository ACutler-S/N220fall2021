//Andrew Cutler
//N220 - 34971
//September 16 ,2021
//Assignment 3: Loops
//FizzBuzz
//----------------------------------------------------------------
//Idea: Create a loop that makes 25 circles, if the number of circle is divisible by 3 make it
//purple, if divisible by 5 make it green, if it is divisible by both make is blue



function setup(){
    createCanvas(800, 800,);
    fill(0,0,0);
//Creation of the canvas and setting the base circle fill to black

    for(let i = 1; i <= 25; i++){
        circle(i * 20, 100, 10);
//Loop that draws the 25 circles

        if(i % 3 == 0 && i % 5 == 0){
            fill(0,0,255);
        }else if(i % 5 == 0){
            fill(0,255,0);
        }else if(i % 3 == 0 ){
            fill(43, 37, 207);
        }
    }
//If else statements that do all the math for the different colored circles, i think this is where my math
//mistake is...

    function draw(){
    background(125);
//Draw function that holds the background color!
    }
}

//I do not think my math is correct or how i coded the math