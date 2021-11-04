 //Andrew Cutler
//N220 - 34971
//November 2 ,2021
//Assignment 8: Functions
//Make Random
//----------------------------------------------------------------

let dvOutput = document.getElementById("dvOutput");
let num = Math.floor(Math.random() * 10);


function generateNum(){
//let num = Math.floor(Math.random() * 10);
console.log(num); 
}

function putonScreen(){
    generateNum();
    dvOutput.innerHTML = "Your number is " + num;
}

/*
I got this one to work correctly how ever I want to know how you could make it happen on every button press without having to refresh the page. This 
is how it works right now.
*/