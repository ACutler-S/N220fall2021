/* 
    most common css modifiers are:
        Height - Always add "px" in this class
        ex: - #namecard{
            height: 100px;
            width: 200px;
        }
        Width - works the same as Height; See above

        Background-Color - Can be defined in wither hex or RGB values
        ex: - #content {
            background-color: #00FF00; 
        }
        Postion - static: web browser postions automatically
                  absolute: developer specifies postion
                  When postitioning absolute top left corner is 0,0
                  Postitive Y amounts are further down the screen
        ex: - #player{
            position: absolute;
            top: 100px;
            left: 100px;
        }
        Margin - Space between this element and the ones around it

        #shy{
            margin: 10px;
        }

*/

/*
Manipulating by JavaScript:
       1. need to reference an HTML element
       2. .style after that element
        ex: 
        let dvTostyle = document.querySelector("#myDiv");
        dvTostyle.style.backgroundColor = "#00FF00";
*/
/*
Creating a new element:
        ex:
        let el = document.createElement("div");
        el.style.backgroundColor = "#aaa";
        el.innerHTML = "solar rays";
        document.body.appendChild(el);
    You can manipulate its style as well as its innerHTML
    
*/

/*
//Creating a new element:
//make an element
let newEL = document.createElement("div");

//customize
newEL.innerHTML ="heads";
newEL.style.backgroundColor= "#ebcf34";
newEL.style.width = "40px";
//place object on page
document.body.appendChild(newEL);
*/

let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "tails";
dvCoin.style.backgroundColor = "#ebcf34";
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function flipCoin(){
    //Do a coin flip
    let flip = Math.random();
    let side = "heads";
    if(flip > .5) side = "tails";

    //set results in inner html
    dvCoin.innerHTML = side;

    //change background color based on results
if(side == "tails"){
    dvCoin.style.backgroundColor = "#eb5634";
}else{
    dvCoin.style.backgroundColor = "#ebcf34";
    }

    //Record results in results list
//make an element
    let newEL = document.createElement("div");

    //customize
    newEL.innerHTML =side;
    newEL.style.backgroundColor= "#999";
    newEL.style.width = "40px";
    newEL.style.float = "left";
    newEL.style.margin = "3px";
    //place object on page
    document.body.appendChild(newEL);

}
