/*
Overview:
Splitting strings into arrays
Searching arrays
Reducing Arrays
Arrays of objects("collections")
*/

//splitting strings: ------------------------------------------------------------
/*
the split method of strings lets you turn strings into arrays.
Splits where if finds the argument, turns each side into an array entry
*/
/*
let statement = "May the force be with you.";
let splitStatement = statement.split(" ");
//split on the spaces
console.log(splitStatement);
//["May", "the", "force", "be", "with", "you."];

// An example with a button and input of splitting a string ---------------------

let txtExample = document.getElementById("txtExample");

function breakString(){
    let sentence = txtExample.value;
    console.log(sentence);

    let splitSentence = sentence.split(" "); 
    console.log(splitSentence);
    //creates an array of words on the spaces...
}
*/
/*
example sentence is: twizzlers are good, if we put "are" inside of the quotes on line 29, 
the output is: twizzlers good. 
*/
//---------------------------------------------------

//Condence OR REDUCING an array:---------------------------------------------------------------------------
/*
let txtExample2 = document.getElementById("txtExample2");

function calcScores(){

    var stringVals = txtExample2.value;

    //condense or reduce array
    let myArray = stringVals.split(",");

    //reduce array
    let sum = 0;

    for(let i = 0; i < myArray.length; i++){
     sum += Number(myArray[i]);   
    }
    console.log(sum);
}
*/
//SEARCHING THROUGH ARRAY-------------------------
let txtExample3 = document.getElementById("txtExample3");
let dvFound = document.getElementById("dvFound");

let socialNetworks = ["Twitter", "Facebook", "Instagram", "mySpace"];

function searchArray(){

    var element = socialNetworks.find(function(item){
        return item == "Instagram";
    })

    console.log(element);
}

// Array of Objects ----------------------------------------------------------------

/*
It is possible to make more complex data structures consisting of objects inside of an array.
*/

/*
let pants = [
    {type: "jeans", condition: "fair", age: 2 },
    {type: "khakis", condition: "good", age: 1 },
    {type: "sweats", condition: "poor", age: 7 },
];

console.log(pants.length) //3
console.log(pants[1]) // {type: "khakis",condition: "good", age: 1 }
console.log(pants[2].type); // sweats
*/

let txtExample4 = document.getElementById("txtExample4");
let dvFound2 = document.getElementById("dvFound2")
let fakeSocial = [
    {name: "Max", update: "Today is 3 cool"},
    {name: "Sarah", update: "Getting Grapes today"},
    {name: "Erin", update: "Stressed bout school =|"},
    {name: "Max", update: "O no I lied"},
];

function fakeRun(){


    for(let i = 0; i < fakeSocial.length; i++) {
        let newEl = document.createElement("div");
        newEl.innerHTML = fakeSocial[i].name + ": "+ fakeSocial[i].update;
        dvFound2.appendChild(newEl);
    }
}