'use strict';

const rollBtn = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const player0ScoreDom = document.getElementById('current--0');
const player1ScoreDom = document.getElementById('current--1');
const player0OrigScoreDom = document.getElementById('score--0')
const player1OrigScoreDom = document.getElementById('score--1')
const holdbtn= document.querySelector(".btn--hold")
const btnnew=document.querySelector('.btn--new')


let player0Active = true;
let player1Active = false;
let player0Score = 0;
let player1Score = 0; 
let player0OrigScore=0;
let player1OrigScore=0;

const rollFun = ()=>{
    const num = Math.floor((Math.random()*6)+1);
    diceImg.src = `dice-${num}.png`

    if(num===1) {player0.classList.toggle('player--active'); 
    player1.classList.toggle('player--active');
    player0Active = !player0Active;
    player1Active = !player1Active;
} 
player1Active? player1Score = num: player0Score = num;
player0Active? player0OrigScore += num: player1OrigScore += num;
player0OrigScoreDom.textContent = player0OrigScore;
player1OrigScoreDom.textContent = player1OrigScore;
player0ScoreDom.textContent = player0Score;
player1ScoreDom.textContent = player1Score;

}

rollBtn.addEventListener('click', rollFun)

holdbtn.addEventListener('click',()=>{
    if(player0Active){
        if(player0OrigScore >= 20){
            player0.classList.add('player--winner')
        }
    }
    if(player1Active){
        if(player1OrigScore >= 20){
            player1.classList.add('player--winner')
        }
    }
})
btnnew.addEventListener('click',()=>{
     player0Active = true;
 player1Active = false;
 player0Score = 0;
 player1Score = 0; 
 player0OrigScore=0;
 player1OrigScore=0;
 player0OrigScoreDom.textContent = player0OrigScore;
player1OrigScoreDom.textContent = player1OrigScore;
player0ScoreDom.textContent = player0Score;
player1ScoreDom.textContent = player1Score;
player0.classList.remove('player--winner')
player1.classList.remove('player--winner')
}
)