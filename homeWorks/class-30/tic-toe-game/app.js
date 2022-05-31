// select all box
const boxes = document.querySelectorAll(".box");

// box text;
const boxText = document.querySelectorAll(".text");

// to know whose turn
let turn = "X";

// winner msg
const winnerMsg = document.querySelector(".game-msg");

// game status
let isGameOver = false;

// reset button
const resetBtn = document.querySelector(".reset");

// winning combination
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// function to change the turn
function changeTurn() {
  return turn === "X" ? "O" : "X";
}

// function to check who won
function checkForWin() {
  wins.forEach((win) => {
    if (
      boxText[win[0]].textContent === boxText[win[1]].textContent &&
      boxText[win[1]].textContent === boxText[win[2]].textContent &&
      boxText[win[0]].textContent !== ""
    ) {
      winnerMsg.textContent = boxText[win[0]].textContent + " Won the game";

      boxText[win[0]].style.color = "red";
      boxText[win[1]].style.color = "red";
      boxText[win[2]].style.color = "red";

      isGameOver = true;
      boxes.forEach((box) => {
        box.classList.add("cursor-not-allowed");
      });
    }
  });
}

// main game logic
boxes.forEach((box) =>
  box.addEventListener("click", function () {
    const text = box.querySelector(".text");
    if (text.textContent === "") {
      text.textContent = turn;
      box.classList.add("cursor-not-allowed");
      turn = changeTurn();
      checkForWin();
      if (isGameOver == false) {
        winnerMsg.textContent = turn + " 's turn";
      }
    }
  })
);

resetBtn.addEventListener("click", function () {
  boxText.forEach((text) => {
    text.style.color = "black";
    text.textContent = "";
  });
  winnerMsg.textContent = "X's turn";
  boxes.forEach((box) => box.classList.remove("cursor-not-allowed"));
  turn = "X";
});
