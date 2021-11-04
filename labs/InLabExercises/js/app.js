//let size = 10;

//function setup(){
    //createCanvas(600, 800);
//}

//function draw(){
    //background("grey");
    //circle(mouseX, mouseY, size);

   // mouseClicked();
//}

//function mouseClicked(){
    //size += 10;

    //if(size === 60){
        //size = 10;
    //}
//}

//--------------------------------------------------------------------------------------------------
//Lab for week 2: Animation and Conditional Operations

//Create an orange circle that mirrors the mouse and is in the opposite side of the canvas

//Create a canvas 
//store xcoord and ycoord as variables
//After the stored coords, Create a circle that is mirrored to the cursor
    //Could do this by flipping 

    //circle( 400 - mouseX, 400 - mouseY, 25);
    //THis is the math behind the problem



/*
    let h = 50;
//starting x point
    let kl = 100;
//starting y point
    let pol = .5;
//Amplitute of the curve
    let r = 10;
//radius
    let j = 10;
//spacing of the circles
    //let xPos = 0;

    function setup(){
        createCanvas(400, 400);

        fill(255, 0 ,0);
        //draws a sine curve
        for(let i = 0; i < 50; i++){
        //creates the for loop that repeats the circle
        let zf = Math.sin(i * pol) * r;
    //creates the variable that holds the math for the sin curve used inside the circle
           // xPos += 5;
        circle(i * j + h, zf + kl, 20);
        }
    //for fun animate
        function draw(){
            background(220);
        }
    }
    */

//Throw out any numbers above 50 from the array, (will need a new array for this.. or to use .splice())
//Calculate average in the "cleaned array"
//draw a rectangle on the screen that is the height of the average
//make sure the rectangle is to the right of any prior rects drawn
/*
    function setup(){
        createCanvas(500, 500);

        let thisarr = [];
        //let averageArr = [];
        for(let i = 0; i < 100; i++){
            thisarr[i] = Math.random()*100;
            console.log(thisarr);
           // averageArr = thisarr.splice(49);
            //console.log(averageArr);
        /*averHeight = averageArr.reduce((a,b) => a + b, 0) / averageArr.length;
        console.log(averHeight);   
        }
        rect(50,50,40,averHeight);*/

       // }
  //  }

//keegans work:
/*
    for(let i = 0; i < 100; i++){
        this.Arr[i] = Math.random()*100;

        if(this.Arr[i] > 50){
            newArr = thisArr.splice(i,1);

        }
        console.log(newArr);
    }
    */
/*
let meeples=[];

function dispense(){
    for(let i = 0; i<20; i++){
    meeples.push({name:"Meeple #"+i, age: Math.floor(Math.random()*50)});
    }
    console.log(meeples);
}


let yearButton = document.createElement("button");
yearButton.style.width = "100px";
yearButton.style.height = "100px";
yearButton.style.float = "left";
yearButton.style.backgroundColor = "red";
yearButton.innerHTML = "YearAdd!";
document.body.appendChild(yearButton);
*/
/*
let books = ["Eragon", "Brisngr", "Eldest", "Inheritance"];

for(let i = 0; i < books.length; i++){
   console.log(books);
}
books.sort();
console.log(books);
*/

/*
let input = document.querySelector("#inputB");
let times = document.querySelector("#inputTimes");

function logOut(){

    console.log(times.value)
    /*

    for (let i = times; i > times.value; i++){
        console.log(input);
    }
    */

//}


let input = document.querySelector("#letInput");
let dvOutput = document.getElementById("Output");
let letters = input.value;

function verify(letters){
    if(letters == "A"){
        dvOutput.innerHTML = "This is a vowel";
    }else if (letters == "E"){
        dvOutput.innerHTML = "This is a vowel";
    }else if (letters == "I"){
        dvOutput.innerHTML = "This is a vowel";
    }else if (letters == "O"){
        dvOutput.innerHTML = "This is a vowel";
    }else if (letters == "U"){
        dvOutput.innerHTML = "This is a vowel";
    }else{
        dvOutput.innerHTML = "This is not a vowel";
    }
}
