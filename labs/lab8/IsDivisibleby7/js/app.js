//Andrew Cutler
//N220 - 34971
//November 2 ,2021
//Assignment 8: Functions
//Is Divisible by 7
//----------------------------------------------------------------

let dvOutput = document.getElementById("dvOutput");
let input = document.querySelector("#UserInput");

let isDiv = "";

function onclick(){
    if(isDiv == "true"){
        dvOutput.innerHTML = "What you typed out is divisible by 7"
    }else{
        dvOutput.innerHTML = "What you typed is NOT divisible by 7"
    }
    check7();
}

function check7(){
    if(dvOutput.value % 7 == 0){

    }

}