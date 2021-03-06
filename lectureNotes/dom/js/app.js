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


//--------------------------------------------------------------------------
//object litteral structure:

//Creating an object
let kitty = {
    name: "meows",
    kind: "Calico",
    age: 0.5
};
//using the dot operator:
kitty.name; //outputs meow
kitty.age ++; //outputs 1.5

//Object Constructor Functions:
//Functions can be used as a "template" for objects
//use the this. keyword to place attributes into the template
//Use the new keyword to create a new object
//A template is only what an object could be - is not itself an object
//ex
function Bike(){
    this.wheels = 2;
    this.speed = 10;
    this.name = "Huffy";
}

//Assumeing the above function is somewhere on the javascript page. we can write:
let myBike = new Bike();

function drink(){
    this.type = "monster";
    this.calories = 220;
}

let myDrink = new drink();

//Also:
function drink(type,calories){
    this.type = type;
    this.calories = calories;
}

let mydrink2 = new drink("coffe",175);
let mydrink3 = new drink("koolaid",1000);
//---------------------------------------------------------------------------

//Object methods:
//Assigning a property to an "anonymous function" (function with no name)
//example from slide:
function Bike(type){
    this.type = type;
    this.wheels = 2;
    this.speed = 10;
    this.ride = function(){
        let randomDistance = Math.round(Math.random() * 10);
        console.log(this.name + " rode " + randomDistance + " meters." );
    //Template string: 
    //console.log(`The ${this.type} bike rode ${randomDistance} miles.`);
    }
 }

 let schwinn = new Bike(Schwinn);
 myBike.ride();

 let huffy = new Bike("Huffy");
 huffy.ride();
/*
 Class syntax
 Another way of defining an object template
 Uses the class keyword
 Puts all methods inside of the class as functions without keywords
 The Constructor function is a special one that is called when the new keyword
  is used to make a new instance of the class
  */
 //Bike Class: * make sure that the class name does not have any parenthesise*
 
 class Bike {

    //Define class level variables here
    wheels = 2;
    speed = 10;
    type = "Huffy";

     constructor(type){
         this.type = type; 
     }

     ride(){
         let randomDistance = Math.round(Math.random() * 10 );
         console.log(this.name + " rode " + randomDistance + " meters." );
     }
 }

 let schwinn = new Bike(Schwinn);
 myBike.ride();

 let huffy = new Bike("Huffy");
 huffy.ride();



 /* INTO P5 we GOOOOO -----------------------------------------------
This is how we do what we just did in JavaScript in p5
*/

//making a particle system:
class Particle {

    x = Math.random() * 600;
    y = Math.random() * 400;
    velocity = {x: 1 - Math.random() * 1.5 , y: -2};
    gravity = .05;
    color = [ Math.random() *255, 100, 100];

    update(){
        noStroke();
        fill(this.color);
        circle(this.x, this.y, 10);

        this.x += this.velocityX;
        this.y += this.velocityY;

        this.velocity.y += this.gravity;

//creates the bouncing:
        if( this.y >= 400){
            this.velocity.y *= -.7;
        }
    }
}
//p5 stuff:
let p = new Particle();
let particles = [];



function setup(){
    createCanvas(600, 400);

    for(let i = 0; i < 123; i++){
        particles[i] = new Particle();
    }
}

function draw(){
    for(let i = 0; i < particles.length; i++){
        particles[i].update();

    }
}


//Objects of Arrays: Part 2:
//-----------------------------------------------------------------------------------

//in html create a button with feed fuction attached:
/* <button onclick="feedFido()">Feed dog</button>

let myDog = {
    name: "fido",
    hunger: 30,
    age: 7,
    legs: 4,
    color: "brown"
};

function feedFido(){
    myDog.hunger = myDog.hunger - 2;
    console.log(myDog.hunger);
}
*/

//Collection:
//Make data structures consisting of objects inside of an array:

let pants = [
    {type: "jeans", condition: "fair", age: 2},
    {type: "khakis", condition: "good", age: 1},
    {type:"sweats", condition: "great", age: 0.5},
];

console.log(pants.length); //3
console.log(pants[1].age); //1
console.log(pants[2].condion); //great


//How to loop through:

let scoresDiv = document.getElementById("scoresDiv");
//from an html div

let scores =[
    {team: "Fridays", score: 10},
    {team: "Crabs", score: 2},
    {team: "Garages", score: 222},
    {team: "Hellcats", score: 666},
];

for(let i = 0; i < scores.length; i++){
    let newEl = document.createElement("div");
    newEl.innerHTML = scores[i].team + ": " + scores[i].score;
    //adds data from class list in a style tag in HTML to the variable:
    newEl.classList.add("score");
    scoresDiv.appendChild(newEl);
}


//Example 2:

