/*
Andrew Cutler
December 4, 2021 - December 9, 2021
N220 Final Project: Tic Tac Toe
*/

/*
DISCLAIMER: This is code taken from a tutorial: I had a really tough time with this 
assignment and finally just looked up a tutorial and tried to learn some things and oh boy did I!
    HOWERVER: This code was not ripped: I did follow along and made sure that I understand what
    was happening and what was going on!
*/

//Setting up variables:
let gameBoard = document.getElementById("gameBoard");
let grid = Array.from(document.getElementsByClassName("box")); //* First example of using the Array.from method
let restartBtn = document.getElementById("restartBtn");
let text = document.getElementById("Text");
let spaces = [null,null, null, null, null, null, null, null, null];
let O_player = "O";
let X_player = "X";
let currentPlayer = X_player;

//Here we create the function that will create the game board and create the borders
//The tutorial used arrow functions 
//My attempt at using normal functions: trying to use the techniques from p5 in the pryamid
/*
function drawBoard(){
    for (let i = 0; i < 3; i ++){
        grid;
        for(let j = 0; j <3; j++){
            grid;
        }
    }
}
*/

//Tutorial using arrow functions:
const drawBoard = () => {
    grid.forEach((box, index) => {
      let styleString = "";
    //This sets the boarder for the top row of boxes:
      if (index < 3) {
        styleString += `border-bottom: 3px solid var(--purple);`;
      }
    //This sets the boarder for the left column of boxes:
      if (index % 3 === 0) {
        styleString += `border-right: 3px solid var(--purple);`;
      }
    //This sets the boarder for the Right column of boxes:
      if (index % 3 === 2) {
        styleString += `border-left: 3px solid var(--purple);`;
      }
      //And lastly this sets the boarder for the bottom row:
      if (index > 5) {
        styleString += `border-top: 3px solid var(--purple);`;
      }
      //This sets the style of the box variable that is parsed through to the styleString variable
      // containing the empty string ie: makes the line
      box.style = styleString;
  
      //Very important CREATES THE EVENT LISTENER FOR THE DIVS ie: box
      box.addEventListener("click", boxClicked);
    });
  };

  //This is the function that holds the click from the above Event listner
  function boxClicked(e) {
    const id = e.target.id;
//Sets the condition for a valid move: Or if there is no other player "icon" in that Div
    //Says if there is NOTHING in the div then set the target (that div) to the current player icon
    if (!spaces[id]) {
      spaces[id] = currentPlayer;
      e.target.innerText = currentPlayer;
    //Here is when the player has won it takes the player icon and puts it into the text div above the board
      if (hasPlayerWon(currentPlayer)) {
        text.innerHTML = `${currentPlayer} wins!!`;
        return;
      }
      currentPlayer = currentPlayer === X_player ? O_player : X_player;
    }
  }

//This function contains the winning condions and checks for what divs have the player icons
//This check is pretty cool because it goes off of the key spot, which in this case is 
// the top left position and then looks at the win constrants that way
/*
Here is what it looks like:
  [0][1][2]
  [3][4][5]
  [6][7][8]
*/
const hasPlayerWon = (player) => {
    //from spot 0, then across to 2, then down to 6, and then diagonal to 8
    if (spaces[0] === player) {
      if (spaces[1] === player && spaces[2] === player) {
        console.log(`${player} wins up top`);
        return true;
      }
      if (spaces[3] === player && spaces[6] === player) {
        console.log(`${player} wins on the left`);
        return true;
      }
      if (spaces[4] === player && spaces[8] === player) {
        console.log(`${player} wins on the diagonal`);
        return true;
      }
    }

    //from spot 8 up to 2, then from 8 across to 6
    if (spaces[8] === player) {
      if (spaces[2] === player && spaces[5] === player) {
        console.log(`${player} wins on the right`);
        return true;
      }
      if (spaces[7] === player && spaces[6] === player) {
        console.log(`${player} wins on the bottom`);
        return true;
      }
    }
    //This checks from 4: if both 3 and 5, then it checks up to 1 and down to 7
    if (spaces[4] === player) {
      if (spaces[3] === player && spaces[5] === player) {
        console.log(`${player} wins on the middle horizontal`);
        return true;
      }
      if (spaces[1] === player && spaces[7] === player) {
        console.log(`${player} wins on the middle vertical`);
        return true;
      }
    }
  };
//Last we have the event handler for the restart button and the function that resets 
// everything back to the start of the game

restartBtn.addEventListener("click", () => {
    //Sets the spaces back to empty spaces
    spaces.forEach((space, index) => {
      spaces[index] = null;
    });
    grid.forEach((box) => {
      box.innerText = "";
    });
    text.innerHTML = `Green Light!`;
  //resets the player turn order back to the first player since it ended on the 2nd player
    currentPlayer = X_player;
  });
  
  drawBoard();