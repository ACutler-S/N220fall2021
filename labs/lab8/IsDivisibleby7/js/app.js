 //Andrew Cutler
//N220 - 34971
//November 2 ,2021
//Assignment 8: Functions
//Is Divisible by 7
//----------------------------------------------------------------

let dvOutput = document.getElementById("dvOutput");
let input = document.querySelector("#UserInput");
let test = 0;


function checkInput(){

    if(input.value % 7 == 0){
        test = true;
    }else{
        test = false;
    }
    console.log(test);
}

function workPlease(){
    if(test = true){
        dvOutput.innerHTML = "What you typed out is divisible by 7" 
    }else if(test = false){
        dvOutput.innerHTML = "What you typed is NOT divisible by 7"
    }
    checkInput();
}

/*
I think i am on the correct track with this one. I just can not seem to understand why my false value message is not showing up in the DIV on the page.
*/