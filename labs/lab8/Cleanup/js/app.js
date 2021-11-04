 //Andrew Cutler
//N220 - 34971
//November 2 ,2021
//Assignment 8: Functions
//CleanUp
//----------------------------------------------------------------

let dvOutput = document.getElementById("dvOutput");
let input = document.querySelector("#UserInput");

//let userString = input.value;
//let splitString = userString.split('');


function noAmper(){
    let userString = input.value;
    let splitString = userString.split('');
    let i = 0;
    while ( i<splitString.length){
        if( splitString[i] === "#"){
            splitString.splice(i,1);

        }else{
            i++;
        }
    }
    console.log(splitString);

    dvOutput.innerHTML = splitString.toString();
}


/*
    I had some trouble on this one and had to use alot of online resources to get where I am at. I used the split function to take the input into an array
    then I used a while loop to check for #. I found this online I tried a few other methods like for loops and I could not get it to work. I then spliced out the index of the 
    # and got it to display. However I could not make it into a string again.

*/
