let txtInput = document.getElementById("txtInput");
let dvOutput = document.getElementById("dvOutput");
let dvFound = document.getElementById("dvFound");
let dvTally = document.getElementById("dvTally");

let count = 0;

function catchWords(){
    let line = txtInput.value;
    console.log(line);

    let splitLine = line.split(" ");
    console.log(splitLine);
    console.log(splitLine.length);

    let badWords = "clear";
    let badWords2 = "water";
    let badWords3 = "tires";

    for(let i = 0; i < splitLine.length; i++){
        if(splitLine[i].toUpperCase() == badWords.toUpperCase()){
            count = count + 1;
            dvFound.innerHTML = "There were bad words found!";
        }else if(splitLine[i].toUpperCase() == badWords2.toUpperCase()){
            count = count + 1;
            dvFound.innerHTML = "There were bad words found!";
        }else if(splitLine[i].toUpperCase() == badWords3.toUpperCase()){
            count = count + 1;
            dvFound.innerHTML = "There were bad words found!";
        }else{
            dvFound.innerHTML = "There were bad NO words found!";
        }
    }
    dvTally.innerHTML= "There were " + count + " bad words found";
    console.log(count);
}