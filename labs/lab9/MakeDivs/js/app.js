let dvOutput = document.getElementById("dvOutput");

let objects = [
    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
];


function makeDiv(){
    for(let i = 0; i < objects.length; i++){
        let newEl = document.createElement("div");
        newEl.style.height = ""+objects[i].height+ "px";
        newEl.style.width = ""+objects[i].width+ "px";
        newEl.style.backgroundColor = "#"+objects[i].color+"px";
        document.body.appendChild(newEl);
    }
    console.log(objects.length);
    console.log(dvOutput);
}

//Counld not get this one to append to the page... I am very confused