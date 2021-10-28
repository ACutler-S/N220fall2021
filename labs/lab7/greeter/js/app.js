//Andrew Cutler
//N220 - 34971
//October 27 ,2021
//Assignment 7: User Input Exercise
//Greeter
//----------------------------------------------------------------

//Create an input
let inputName = document.querySelector("#userInput");

//Create the function attached to the button click
function greetYou(){
    let inputValue = inputName.value
    console.log("Hello " + inputValue);
}