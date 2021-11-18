let answerBox = document.getElementById("answerArea");

let element = document.getElementById("button");
element.addEventListener("onclick", answerQ);

function answerQ(event){
    //get attribute
    let answer = event.target.getAttribute("data-answer");
    console.log(answer);
    answerBox.innerHTML = answer;
}