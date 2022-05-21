// DOM elements
const el_btn_viewRules = document.querySelector("#viewRules");
const el_btn_rock = document.querySelector("#rock");
const el_btn_paper = document.querySelector("#paper");
const el_btn_scissors = document.querySelector("#scissors");
const el_p_score = document.querySelector("#score");

const buttonElements = [ el_btn_rock, el_btn_paper, el_btn_scissors ];
let score = 0;

// Game outcomes: ${key} beats ${value}
const beatsTable = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};
const choices = Object.keys(beatsTable);

function getComputersChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getOutcome(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }
    if (beatsTable[playerChoice] === computerChoice) {
        score++;
        return "win";
    }
    score--;
    return "loss";
}

function playRound(choice) {
    const computersChoice = getComputersChoice();
    console.log(`player chooses ${choice}`);
    console.log(`computer chooses ${computersChoice}`);
    const outcome = getOutcome(choice, computersChoice);
    console.log(outcome);
    el_p_score.textContent = score;
}



buttonElements.forEach(btn => {
    btn.addEventListener("click", e => playRound(e.target.id));
});

el_btn_viewRules.addEventListener("click", e => console.log(e.target));