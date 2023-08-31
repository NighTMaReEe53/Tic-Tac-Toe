// Title
let theTitle = document.querySelector(".head h2");
let theCard = document.querySelector(".cards");
let newAudio = new Audio("./audios/succ.mp3");

// Set Option
let currentTrun = "x";
let theArray = [];

// Start Game
function startGame(theId) {
  // Select Chossen Element
  let theElement = document.getElementById(theId);
  if (currentTrun === "x" && theElement.innerHTML == "") {
    theElement.innerHTML = "X";
    theTitle.innerHTML = "O Turn";
    currentTrun = "o";
  } else if (currentTrun === "o" && theElement.innerHTML == "") {
    theElement.innerHTML = "O";
    theTitle.innerHTML = "X Turn";
    currentTrun = "x";
  }
  theWinner();
}

function theWinner() {
  for (let i = 1; i <= 9; i++) {
    // Save Indx To Array
    theArray[i] = document.getElementById(`item${i}`).innerHTML;
  }
  // Check All Item
  if (
    theArray[1] == theArray[2] &&
    theArray[2] == theArray[3] &&
    theArray[2] != ""
  ) {
    handleGame(1, 2, 3);
  }
  if (
    theArray[4] == theArray[5] &&
    theArray[5] == theArray[6] &&
    theArray[5] != ""
  ) {
    handleGame(4, 5, 6);
  }
  if (
    theArray[7] == theArray[8] &&
    theArray[8] == theArray[9] &&
    theArray[7] != ""
  ) {
    handleGame(7, 8, 9);
  }
  if (
    theArray[1] == theArray[4] &&
    theArray[4] == theArray[7] &&
    theArray[7] != ""
  ) {
    handleGame(1, 4, 7);
  }
  if (
    theArray[2] == theArray[5] &&
    theArray[5] == theArray[8] &&
    theArray[8] != ""
  ) {
    handleGame(2, 5, 8);
  }
  if (
    theArray[3] == theArray[6] &&
    theArray[6] == theArray[9] &&
    theArray[9] != ""
  ) {
    handleGame(3, 6, 9);
  }
  if (
    theArray[1] == theArray[5] &&
    theArray[5] == theArray[9] &&
    theArray[9] != ""
  ) {
    handleGame(1, 5, 9);
  }
  if (
    theArray[3] == theArray[5] &&
    theArray[5] == theArray[7] &&
    theArray[7] != ""
  ) {
    handleGame(3, 5, 7);
  }
}

function handleGame(numOne, numTwo, numThree) {
  document.getElementById(`item${numOne}`).style.color = "#009688";
  document.getElementById(`item${numTwo}`).style.color = "#009688";
  document.getElementById(`item${numThree}`).style.color = "#009688";
  theTitle.innerHTML = `Congratulation The Winner Is ${theArray[numThree]}`;
  theCard.classList.add("no-clicked");
  document.querySelector(".over").classList.remove("hidden");
  document.querySelector(".over").classList.add("show");
  newAudio.play();
}

document.querySelector(".reset").addEventListener("click", () => {
  theArray = [];
  // Select All Item
  let theItems = document.querySelectorAll(".square");
  theItems.forEach((item) => {
    item.innerHTML = "";
    item.style.color = "#000"
    currentTrun = "x";
    theTitle.innerHTML = "Play Game X | O";
  });
  document.querySelector(".over").classList.add("hidden");
  theCard.classList.remove("no-clicked");
  newAudio.pause();
});
