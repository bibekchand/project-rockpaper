let results = document.querySelector(".result");
let human = document.querySelector("#human");
let computer = document.querySelector("#computer");
let text = document.querySelector(".middle > span");

results.addEventListener("mousedown", (e) => {
  
  if(!e.button==0) return;
  let target = e.target;
  // target.style.borderColor = "white";
  let targetid = target.getAttribute("id");
  // results.addEventListener("mouseup", (e) => {
  //   target.style.borderColor = "blueviolet";
  // });
  switch (targetid) {
    case "one":
      human.setAttribute("src", "images/stone.png");
      playGame(0);
      return;
    case "two":
      human.setAttribute("src", "images/paper.png");
      playGame(1);
      return;
    case "three":
      human.setAttribute("src", "images/scissors.png");
      playGame(2);
      return;
  }
});
let computerScore = 0;
let playerScore = 0;
let count = 0;
function getComputerChoice() {
  return Math.floor(Math.random() * 3); //get random number between 0 and 2

}
function playGame(playerChoice) {
  let compChoice = getComputerChoice();
  switch(compChoice){
    case 0:
      computer.setAttribute("src", "images/stone.png");
      break;
    case 1:
      computer.setAttribute("src", "images/paper.png");
      break;
    case 2:
      computer.setAttribute("src", "images/scissors.png");
      break;
  }
  if(playerChoice==compChoice){
    text.textContent = "It's a tie";
  }
  else if(playerChoice==1 && compChoice==0){
    playerScore++;
    text.textContent = "Player Wins";
  }
  else if(playerChoice==2 && compChoice==1){
    text.textContent = "Player Wins";
    playerScore++;
  }
  else if(playerChoice==0 && compChoice==2){
    text.textContent = "Player Wins";
    playerScore++;
  }
  else {
    text.textContent = "Computer Wins";
    computerScore++;
  }
  let playerResult = document.querySelector("#playerScore");
  let compResult = document.querySelector("#computerScore");
  playerResult.textContent = `You: ${playerScore}`;
  compResult.textContent = `Computer: ${computerScore}`;
  count++;
  if(count>=5)
  {
    if(playerScore>computerScore)
      {text.textContent = `Player Wins this round`;
  }
    else text.textContent = `Computer Wins this round`;
    computerScore=playerScore=count=0;
  }
  setTimeout(function() {
    computer.setAttribute("src", "images/ezgif.com-animated-gif-maker.gif");
}, 1500);  // 2000 milliseconds = 2 seconds

}
