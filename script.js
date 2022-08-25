const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const lose = document.querySelector("#lose");
let userInput = "";
let computer = "";

rock.addEventListener("click", getUserChoice);
paper.addEventListener("click", getUserChoice);
scissors.addEventListener("click", getUserChoice);

function getUserChoice(event) {
  if (event.target.id === "rock") {
    userInput = "rock";
  } else if (event.target.id === "paper") {
    userInput = "paper";
  } else if (event.target.id === "scissors") {
    userInput = "scissors";
  }
  rock.addEventListener("click", determineWinner);
  paper.addEventListener("click", determineWinner);
  scissors.addEventListener("click", determineWinner);
  console.log("User's choice is:" + userInput);
  getComputerChoice();
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computer = "rock";
    compShowRock();
    determineWinner();
  } else if (randomNumber === 1) {
    computer = "paper";
    compShowPaper();
    determineWinner();
  } else if (randomNumber === 2) {
    computer = "scissors";
    compShowScissors();
    determineWinner();
  }
  console.log("ComputerChoice is:" + computer);
}

function determineWinner() {
  draw.classList.add("hidden");
  lose.classList.add("hidden");
  win.classList.add("hidden");

  if (userInput === computer) {
    console.log("game tie!");
    draw.classList.remove("hidden");
  } else if (userInput === "rock") {
    if (computer === "paper") {
      console.log("Computer won!");
      lose.classList.remove("hidden");
    } else {
      console.log("Congratulations you won!");
      win.classList.remove("hidden");
    }
  } else if (userInput === "paper") {
    if (computer === "scissors") {
      console.log("Computer won!");
      lose.classList.remove("hidden");
    } else {
      console.log("Congratulations you won!");
      win.classList.remove("hidden");
    }
  } else if (userInput === "scissors") {
    if (computer === "rock") {
      console.log("Computer won!");
      lose.classList.remove("hidden");
    } else {
      console.log("Congratulations you won!");
      win.classList.remove("hidden");
    }
  }
}

/* function showWinner() {
  console.log(determineWinner(userInput, computer));
}
 */
/* function playGame() {
  const userInput = getUserChoice();
  const computer = getComputerChoice();
  console.log("Computer threw:" + computer);
  console.log("you threw:" + userInput);
  console.log(determineWinner(userInput, computer));
} */

rock.addEventListener("click", showRock);
paper.addEventListener("click", showPaper);
scissors.addEventListener("click", showScissors);
function showRock() {
  document.querySelector(".player").style.backgroundImage = "url(hand_rock.png)";
}
function showPaper() {
  console.log("show paper");
  document.querySelector(".player").style.backgroundImage = "url(hand_paper.png)";
}
function showScissors() {
  document.querySelector(".player").style.backgroundImage = "url(hand_scissors.png)";
}

//////computer hand signs
function compShowRock() {
  document.querySelector("#player2").style.backgroundImage = "url(hand_rock.png)";
}
function compShowPaper() {
  document.querySelector("#player2").style.backgroundImage = "url(hand_paper.png)";
}
function compShowScissors() {
  document.querySelector("#player2").style.backgroundImage = "url(hand_scissors.png)";
}
