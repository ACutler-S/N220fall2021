 //Andrew Cutler
//N220 - 34971
//November 18 ,2021
//Assignment 10: Events
//Flash Cards


//display div
let answerBox = document.getElementById("answerArea");

//set the listner
let element = document.getElementById("button");
element.addEventListener("onclick", answerQ);

//function that does the answer for the questions
function answerQ(event){
    //get attribute
    let answer = event.target.getAttribute("data-answer");
    console.log(answer);
    answerBox.innerHTML = answer;
}