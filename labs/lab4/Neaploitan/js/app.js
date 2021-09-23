
let flavors = [ "#ede9df", "#635329", "#c491cf"]

function setup(){
    createCanvas(500, 300,);

    for (let i = 0; i < flavors.length; i++){
        fill(flavors[i]);
        rect(10,95 * i,450,250);
    }

}