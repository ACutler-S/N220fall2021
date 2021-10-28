//Andrew Cutler
//N220 - 34971
//October 27 ,2021
//Assignment 7: User Input Exercise
//TipCalculator
//----------------------------------------------------------------

//Create the input and the two divs:
//It called to update in the console, but I wanted to try out updating to the document with 2 divs to display the information

//Reference to the input and two divs from the HTML page
let billAmount = document.querySelector("#billAmount");
let dvTip = document.getElementById("dvTip");
let dvBill = document.getElementById("dvBill");

//Funtion that is called on the button click
function calculateBill(){
    let tip = Math.round(billAmount.value * .2)
    let totalBill = Number(billAmount.value) + tip;
    console.log("Tip: $" +tip ,"Total: $"  +totalBill);
    dvTip. innerHTML = "Tip: $" +tip;
    dvBill.innerHTML = "Total: $"  +totalBill;
    //console.log(dvBill);
}