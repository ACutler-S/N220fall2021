//Andrew Cutler
//N220 - 34971
//September 16 ,2021
//Assignment 3: Loops
//pyramid loop
//----------------------------------------------------------------
//Idea: Create a nested for loop that draws red circles in a pyramid shape


function setup(){
    createCanvas(500, 600,);
    fill(255,0,0);

    for(let i = 0; i <= 3; i++){
        
        for (let j = 0; j <=3  ; j++){
        rect(i* 35, j *35, 30 ,30);
        }
    }
}

function draw(){

}

//This one stumped me. I believe that there is a problem inside the loops that is causing them to just draw a grid