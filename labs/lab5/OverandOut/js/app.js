//Andrew Cutler
//N220 - 34971
//September 30 ,2021
//Assignment 5: DOM manipulation
//Over and Out
//----------------------------------------------------------------

let box = document.getElementById("box");
box.style.height =  "100px";
box.style.width = "100px";
box.style.backgroundColor = "black";
document.body.appendChild(box);

function changeColor(){
box.style.backgroundColor = "#65d0f7";
}
function mouseOut(){
    box.style.backgroundColor ="black";
}
