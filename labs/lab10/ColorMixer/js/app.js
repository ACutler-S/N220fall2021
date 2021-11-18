let r = 0;
let g = 0;
let b = 0;

let displayBox = document.getElementById("displayBox");
displayBox.style.backgroundColor= "rgb(" +r +", " +g+ ", " +b+ ")";  


let buttonColor = document.getElementById("button");
buttonColor.addEventListener("click", changeColor);

function changeColor(event){
    //get attridute
    let valChange = event.target.getAttribute("data-number");
    console.log(valChange);
 
}
let calcBox = document.getElementById("calculatorBox");
calcBox.innerHTML = "rgb(" +r +", " +g+ ", " +b+ ")"; 