//Andrew Cutler
//N220 - 34971
//October 11, 2021
//Midterm MakeUp: Assignment 3: Loops
//pyramid loop
//----------------------------------------------------------------
//Idea: Create a nested for loop that draws red circles in a pyramid shape


function setup(){
    createCanvas(500, 600,);
    fill(255,0,0);
}

function draw(){

    for(let i = 1; i <= 4; i++){
        rect( 35, i* 35, 30,30)
        for (let j = 1; j <=i; j++){
        rect(j * 35,i* 35, 30 ,30);
        }
    }
}


//I did some review on how nested looping worked and I fixed my mistake and the prgram runs correctly =D