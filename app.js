const options = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const gameOptions = [options.ROCK, options.PAPER, options.SCISSORS];

function randomOption() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function pcChoice() {
  let pcOption = randomOption();
  if (pcOption === options.ROCK) {
    console.log("Computer chose:", options.ROCK);
  } else if (pcOption === options.PAPER) {
    console.log("Computer chose:", options.PAPER);
  } else if (pcOption === options.SCISSORS) {
    console.log("Computer chose:", options.SCISSORS);
  }
}

function userChoice() {
  let userOption = randomOption();
  if (userOption === options.ROCK) {
    console.log("User chose:", options.ROCK);
  } else if (userOption === options.PAPER) {
    console.log("User chose:", options.PAPER);
  } else if (userOption === options.SCISSORS) {
    console.log("User chose:", options.SCISSORS);
  }
}

const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", function play() {
  pcChoice();
  userChoice();
});
