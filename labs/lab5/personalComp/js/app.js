//Andrew Cutler
//N220 - 34971
//September 30 ,2021
//Assignment 5: DOM manipulation
//PersonalComp
//----------------------------------------------------------------

let field = document.getElementById("map");
field.innerHTML = "EMPTY";
field.style.backgroundColor = "green";
field.style.height = "500px";
field.style.width = "500px";

function circleSpawn(){
field.innerHTML = "FULL";
field.style.backgroundColor = "#ad544e"
field.style.height="100px";
field.style.width = "100px";
}