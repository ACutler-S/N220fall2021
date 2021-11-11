let numInput = document.getElementById("numInput");
let dvOutput = document.getElementById("dvOutput");
let dvOutput2 = document.getElementById("dvOutput2");

function mathInput(){
    
    let stringInput = numInput.value;

    let numAr = stringInput.split(",");

    let sum = 0;

    for (let i = 0; i < numAr.length; i++){
        sum += Number(numAr[i]);

    }
    let average = sum / numAr.length;

    dvOutput.innerHTML = "The sum is " + sum;
    dvOutput2.innerHTML = "The average is " + average;
    console.log(numAr.length);

}