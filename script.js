'use strict';

const rollBtn = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const player0ScoreDom = document.getElementById('current--0');
const player1ScoreDom = document.getElementById('current--1');

let player0Active = true;
let player1Active = false;
let player0Score = 0;
let player1Score = 0; 

rollBtn.addEventListener('click', ()=>{
    const num = Math.floor((Math.random()*6)+1);
    diceImg.src = `dice-${num}.png`

    if(num===1) {player0.classList.toggle('player--active'); 
    player1.classList.toggle('player--active');
    player0Active = !player0Active;
    player1Active = !player1Active;
} 
player1Active? player1Score = num: player0Score = num;
player0ScoreDom.textContent = player0Score;
player1ScoreDom.textContent = player1Score;

})

