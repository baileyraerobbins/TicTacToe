// ** DEFINE PLAYERS & MESSAGES **

// Select game status text in h2

let gameStatus = document.querySelector(".playerText");

// Messages that will appear in h2 to determine status of game

let p1 = '🌴';
let p2 = '🍹'

const p1WinsMsg = () => "Cowabunga, dude! " + p1 + " has won! Click to play again.";
const p2WinsMsg = () => "Right on! " + p2 + " has won! Click to play again.";

const tieMsg = () => "You tied! Click to play again.";

const player1Turn = () => "Relax, it's " + p1 + "'s turn.";
const player2Turn = () => "Chill out, it's " + p2 + "'s turn.";

const toBegin = () => "Start game! Click to begin " + p1 + "'s turn!";

//Message to let players know whose turn it is

gameStatus.innerHTML = toBegin();

// ** TOGGLE PLAYERS --- Toggle players on click event **
// Event listener will listen for cell click. Loop each click on a cell 

let cells = document.querySelectorAll(".row > div");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

// Switch players from p1 to p2 by checking if click is even/odd

let empty = 0;
let movesMade = 0;

function togglePlayer(movesMade) {
  return movesMade % 2 == 0;
}

function cellClicked(square) {
  if (empty) {
    square.textContent = "";
  } else if (togglePlayer(movesMade)) {
    if (square.target.textContent != p2) {
      gameStatus.innerHTML = player2Turn();
      square.target.textContent = p1;
      findWinner();
      movesMade++
      return;
    }
  } else {
    if (square.target.textContent != p1) {
      gameStatus.innerHTML = player1Turn();
      square.target.textContent = p2;
      findWinner();
      movesMade++
      return;
    }
  }
}


// ** CHECK FOR WINNER --- Calculate winning combinations. Use if/else statements. **

let p1won = false;
let p2won = false;
let tie = false;

function findWinner() {

  // PLAYER ONE WIN COMBINATIONS 

  if (cells[0].textContent == p1 && cells[1].textContent == p1 && cells[2].textContent == p1) {
    p1won = true;
    cells[0].style.background = "#FF1493";
    cells[1].style.background = "#FF1493";
    cells[2].style.background = "#FF1493";
    

  } else if (cells[3].textContent == p1 && cells[4].textContent == p1 && cells[5].textContent == p1) {
    p1won = true;
    cells[3].style.background = "#FF1493";
    cells[4].style.background = "#FF1493";
    cells[5].style.background = "#FF1493";

  } else if (cells[6].textContent == p1 && cells[7].textContent == p1 && cells[8].textContent == p1) {
    p1won = true;
    cells[6].style.background = "#FF1493";
    cells[7].style.background = "#FF1493";
    cells[8].style.background = "#FF1493";

  } else if (cells[0].textContent == p1 && cells[3].textContent == p1 && cells[6].textContent == p1) {
    p1won = true;
    cells[0].style.background = "#FF1493";
    cells[3].style.background = "#FF1493";
    cells[6].style.background = "#FF1493";

  } else if (cells[1].textContent == p1 && cells[4].textContent == p1 && cells[7].textContent == p1) {
    p1won = true;
    cells[1].style.background = "#FF1493";
    cells[4].style.background = "#FF1493";
    cells[7].style.background = "#FF1493";

  } else if (cells[2].textContent == p1 && cells[5].textContent == p1 && cells[8].textContent == p1) {
    p1won = true;
    cells[2].style.background = "#FF1493";
    cells[5].style.background = "#FF1493";
    cells[8].style.background = "#FF1493";

  } else if (cells[0].textContent == p1 && cells[4].textContent == p1 && cells[8].textContent == p1) {
    p1won = true;
    cells[0].style.background = "#FF1493";
    cells[4].style.background = "#FF1493";
    cells[8].style.background = "#FF1493";

  } else if (cells[6].textContent == p1 && cells[4].textContent == p1 && cells[2].textContent == p1) {
    p1won = true;
    cells[6].style.background = "#FF1493";
    cells[4].style.background = "#FF1493";
    cells[2].style.background = "#FF1493";

    // PLAYER TWO WIN COMBINATIONS 

  } else if (cells[0].textContent == p2 && cells[1].textContent == p2 && cells[2].textContent == p2) {
    p2won = true;
    cells[0].style.background = "#FF1493";
    cells[1].style.background = "#FF1493";
    cells[2].style.background = "#FF1493";
    
  } else if (cells[3].textContent == p2 && cells[4].textContent == p2 && cells[5].textContent == p2) {
    p2won = true;
    cells[3].style.background = "#FF1493";
    cells[4].style.background = "#FF1493";
    cells[5].style.background = "#FF1493";
 
  } else if (cells[6].textContent == p2 && cells[7].textContent == p2 && cells[8].textContent == p2) {
    p2won = true;
    cells[6].style.background = "#FF1493";
    cells[7].style.background = "#FF1493";
    cells[8].style.background = "#FF1493";
    return;

  } else if (cells[0].textContent == p2 && cells[3].textContent == p2 && cells[6].textContent == p2) {
    p2won = true;
    cells[0].style.background = "#FF1493";
    cells[3].style.background = "#FF1493";
    cells[6].style.background = "#FF1493";

  } else if (cells[1].textContent == p2 && cells[4].textContent == p2 && cells[7].textContent == p2) {
    p2won = true;
    cells[1].style.background = "#FF1493";
    cells[4].style.background = "#FF1493";
    cells[7].style.background = "#FF1493";

  } else if (cells[2].textContent == p2 && cells[5].textContent == p2 && cells[8].textContent == p2) {
    p2won = true;
    cells[2].style.background = "#FF1493";
    cells[5].style.background = "#FF1493";
    cells[8].style.background = "#FF1493";
   
  } else if (cells[0].textContent == p2 && cells[4].textContent == p2 && cells[8].textContent == p2) {
    p2won = true;
    cells[0].style.background = "#FF1493";
    cells[4].style.background = "#FF1493";
    cells[8].style.background = "#FF1493";
  
  } else if (cells[6].textContent == p2 && cells[4].textContent == p2 && cells[2].textContent == p2) {
    p2won = true;
    cells[6].style.background = "#FF1493";
    cells[4].style.background = "#FF1493";
    cells[2].style.background = "#FF1493"; 

  // CHECK FOR TIE 

  } else if (
    cells[0].textContent != "" && 
    cells[1].textContent != "" &&
    cells[2].textContent != "" &&
    cells[3].textContent != "" &&
    cells[4].textContent != "" &&
    cells[5].textContent != "" &&
    cells[6].textContent != "" &&
    cells[7].textContent != "" &&
    cells[8].textContent != "" ){
    tie = true;
  }
}

// ** RESET GAME AFTER WIN/TIE WITH CLICK **

let gameClick = document.querySelector("#board");
gameClick.addEventListener("click", gameOver);

function gameOver (){
  if (p1won == true){
    alert(p1WinsMsg())
    window.location.reload();
  } else if (p2won == true){
    alert(p2WinsMsg())
    window.location.reload();
  } else if (tie == true){
    alert(tieMsg())
    window.location.reload(); 
  }
  return;
}

// ** RESET GAME WITH BUTTON ---  Refresh the page with a button or click of board.

let button = document.querySelector(".gameRestart");
button.addEventListener("click", resetGame);

function resetGame() {
    window.location.reload();
}
