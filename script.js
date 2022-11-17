let words = ["rock", "paper", "scissor"];
let random = Math.floor(Math.random() * words.length);
let computerChoice = words[random];

let comChoice = document.querySelector("#comChoice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let results = document.querySelector("#results");

let playBtn = document.querySelector("#playAgain");

let rock2 = rock.addEventListener("click", (e) => {
  var choice = e.target.value;
  console.log(e.target.value);
  game(choice);
});
let paper2 = paper.addEventListener("click", (e) => {
  var choice = e.target.value;
  console.log(e.target.value);
  game(choice);
});
let scissor2 = scissor.addEventListener("click", (e) => {
  var choice = e.target.value;
  console.log(e.target.value);
  game(choice);
});

function game(choice) {
  var user = choice;
  comChoice.textContent = computerChoice;
  // tied
  if (user === computerChoice) {
    results.textContent = "Draw";
  }
  // win
  else if (
    (user === words[0] && computerChoice === words[2]) ||
    (user === words[2] && computerChoice === words[1]) ||
    (user === words[1] && computerChoice === words[0])
  ) {
    results.textContent = "Winner Winner";
  }
  // Lose
  else {
    results.textContent = "Loser Loser";
  }
}

playBtn.addEventListener("click", () => {
  window.location.reload(false);
});
