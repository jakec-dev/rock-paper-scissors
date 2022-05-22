"use strict";

// DOM elements
const el_btn_rock = document.querySelector('#rock');
const el_btn_paper = document.querySelector('#paper');
const el_btn_scissors = document.querySelector('#scissors');
const el_p_score = document.querySelector('#score');
const el_btn_viewRules = document.querySelector('#viewRules');

class Game {
    constructor() {
        this.score = 0;
        this.beatsTable = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };
        this.choices = Object.keys(this.beatsTable);
    }

    determineOutcome(choice1, choice2) {
        if (choice1 === choice2) return 'draw';
        if (this.beatsTable[choice1] === choice2) return 'win';
        return 'loss';
    }

    playRound(playerChoice) {
        const computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
        console.log(`${playerChoice} vs ${computerChoice}`)
        const outcome = this.determineOutcome(playerChoice, computerChoice);
        switch (outcome) {
            case 'win':
                console.log('YOU WIN!!!');
                this.score++;
                break;
            case 'loss':
                console.log('You lost');
                this.score--;
                break;
            case 'draw':
                console.log('Draw. Play again');
                break;
        }
        console.log('*********************')
        return outcome;
    }
}

const game = new Game();

const buttonElements = [ el_btn_rock, el_btn_paper, el_btn_scissors ];
buttonElements.forEach(btn => {
    btn.addEventListener("click", e => {
        game.playRound(e.target.id);
        el_p_score.textContent = game.score;
    });
});