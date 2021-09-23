
let color = [	"#622569", 	"#b8a9c9",	"#d6d4e0",	"#5b9aa0",	"#c83349",	"#e06377",	"#eeac99",	"#f9d5e5"];
let color2 = ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6", "#EE9B00", "#CA6702", "#BB3E03", "#AE2012", "#9B2226",];
let color3 = ["#F72585", "#560BAD", "#3F37C9", "#4CC9F0"];


function setup(){
    createCanvas(500, 500,);
}

function draw(){

background(50,);

for(let i = 0; i < color3.length; i++){
    fill(color3[i]);
    circle(250, 55 + 130 * i, 50);
}

    for(let i = 0; i < color.length; i++){
        fill(color[i]);
            rect(20* i,20*i,10*i,10*i);
    }
    for(let i = 0; i < color2.length; i++){
        fill(color2[i]);
            rect(20 * i, 50 * i, 10 * i, 10 * i);
    }
    for(let i = 0; i < color2.length; i++){
        fill(color2[i]);
            rect(50 * i, 20 * i, 10 * i, 10 * i);
    }
}