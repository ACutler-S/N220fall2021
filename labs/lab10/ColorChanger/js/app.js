 //Andrew Cutler
//N220 - 34971
//November 18 ,2021
//Assignment 10: Events
//Color Changer

//add listner
let sqDiv = document.getElementById("square");
sqDiv.addEventListener("click",colorChange);


//funciton that changes the color
function colorChange(event){
    //get attribute
    let colr = event.target.getAttribute("data-color");
    console.log(colr);
    event.target.style.backgroundColor = colr;
}