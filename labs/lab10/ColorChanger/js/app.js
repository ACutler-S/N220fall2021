
let sqDiv = document.getElementById("square");
sqDiv.addEventListener("click",colorChange);



function colorChange(event){
    //get attribute
    let colr = event.target.getAttribute("data-color");
    console.log(colr);
    event.target.style.backgroundColor = colr;
}