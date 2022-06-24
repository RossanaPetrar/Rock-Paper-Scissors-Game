const options = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const gameOptions = [options.ROCK, options.PAPER, options.SCISSORS];

function randomOption() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// USER CHOICE
function userChoice() {
  let userOption = randomOption();
  if (userOption === options.ROCK) {
    return options.ROCK;
  } else if (userOption === options.PAPER) {
    return options.PAPER;
  } else if (userOption === options.SCISSORS) {
    return options.SCISSORS;
  }
}

// COMPUTER CHOICE
function pcChoice() {
  let pcOption = randomOption();
  if (pcOption === options.ROCK) {
    return options.ROCK;
  } else if (pcOption === options.PAPER) {
    return options.PAPER;
  } else if (pcOption === options.SCISSORS) {
    return options.SCISSORS;
  }
}

const playButton = document.querySelector(".play-button");
const mainEl = document.querySelector("main");

// RENDER GAME
function renderGame() {
  let userResult = userChoice();
  let pcResult = pcChoice();

  function winner() {
    if (userResult === pcResult) {
      return "Draw!";
    } else if (
      (userResult === options.ROCK && pcResult === options.SCISSORS) ||
      (userResult === options.PAPER && pcResult === options.ROCK) ||
      (userResult === options.SCISSORS && pcResult === options.PAPER)
    ) {
      return "User wins!";
    } else if (
      (userResult === options.ROCK && pcResult === options.PAPER) ||
      (userResult === options.PAPER && pcResult === options.SCISSORS) ||
      (userResult === options.SCISSORS && pcResult === options.ROCK)
    ) {
      return "Computer wins!";
    }
  }

  let gameResult = winner();

  mainEl.innerHTML = `
  <div class="container d-flex justify-content-center">
  <section class="p-3 m-5 text-center player">
    <h3>User chose:</h3>
    <p class="gameOption">${userResult}</p>
  </section>
  <section class="p-3 m-5 text-center player">
    <h3>Computer chose:</h3>
    <p class="gameOption">${pcResult}</p>
  </section>
</div>
<div class="container text-center">
  <section class="m-3">
    <h3>${gameResult}</h3>
  </section>
</div>`;
}

// PLAY BUTTON EVENT
playButton.addEventListener("click", function play() {
  renderGame();
});
