// ***** In Class lecture *****
let sqColorR = 0; //use color picker stuff... not the color name.
//one way we can use a variable
let sqSize = 100;

function setup(){
    createCanvas(600,400);
    //rect(30,30,100,100);
}

function draw(){
    fill(sqColorR,82,148);
    rect(30, 30, sqSize, sqSize);
    //sqSize = sqSize + 1;
    //the above code makes the square grow
    sqColorR = sqColorR + 1;  //Long hand
    //sqColorR += 1 ; This is the short hand

    if(sqColorR > 198){
        sqColorR = 0;
        
    }

}

//********** video Lecture NOTES ***** */