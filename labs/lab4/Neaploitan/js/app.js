//Andrew Cutler
//N220 - 34971
//September 23 ,2021
//Assignment 4: Array
//Neopolitan
//----------------------------------------------------------------

//array that holds the ice cream colors
let flavors = [ "#ede9df", "#635329", "#c491cf"]

//Setup function, something new here, instead of having a Y of 500... i changed it to 300 =D
function setup(){
    createCanvas(500, 300,);

//For loop that sets the amount of squares to be drawn and sets the fill color
    for (let i = 0; i < flavors.length; i++){
        fill(flavors[i]);
//Getting the rectangles situated correctly threw me for a minute
        rect(10,95 * i,450,250);
    }

}