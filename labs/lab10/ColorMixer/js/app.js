 //Andrew Cutler
//N220 - 34971
//November 18 ,2021
//Assignment 10: Events
//Color Mixer

//setting the intial box color

let r = 0;
let g = 0;
let b = 0;

let displayBox = document.getElementById("displayBox");
displayBox.style.backgroundColor= "rgb(" +r +", " +g+ ", " +b+ ")";  

//setting the listner up 
let buttonColor = document.getElementById("button");
buttonColor.addEventListener("click", changeColor);

//function that houses the change
function changeColor(event){
    //get attridute
    let valChange = event.target.getAttribute("data-number");
    console.log(valChange);
 
}
//display the rgb value on the second box
let calcBox = document.getElementById("calculatorBox");
calcBox.innerHTML = "rgb(" +r +", " +g+ ", " +b+ ")"; 