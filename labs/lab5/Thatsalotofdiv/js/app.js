//Andrew Cutler
//N220 - 34971
//September 23 ,2021
//Assignment 5: DOM manipulation
//Thats a lot of DIV
//----------------------------------------------------------------

/*
let red = Math.floor((Math.random()* 255) +1);
let blue =  Math.floor((Math.random()* 255) +1);
let green = Math.floor((Math.random()* 255) +1);

console.log(red);
console.log(green);
console.log(blue)
*/

for(let i = 0; i < 100; i++){
    let red = Math.floor((Math.random()* 255) +1);
    let blue =  Math.floor((Math.random()* 255) +1);
    let green = Math.floor((Math.random()* 255) +1);

    let sqDiv = document.createElement("div");
    sqDiv.style.width = "20px";
    sqDiv.style.height = "20px";
    sqDiv.style.float = "left";
    sqDiv.style.margin = "2px";
    document.body.appendChild(sqDiv);
    sqDiv.style.backgroundColor = "rgb(" +red + ", " +green+ ", " +blue+ ")"

}
//Had some trouble with the SCOPE