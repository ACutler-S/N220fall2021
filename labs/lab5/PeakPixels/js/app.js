

let h = 100;

let box = document.getElementById("box");
box.style.height =  +h +  "px";
box.style.width =  +h + "px";
box.style.backgroundColor = "green";
document.body.appendChild(box);

function increaseSize(){
    
    box.style.height =  +h *1.1 +  "px";
    box.style.width =  +h *1.1 + "px";
    document.body.appendChild(box);
    }
/*
function increaseSize(){
let height = h * 1.1;
    if(height <= 800){
        increaseSize(height);
    }
   console.log(onclick);
    }
    */
