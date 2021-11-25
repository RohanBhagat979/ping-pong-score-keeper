let p1Score = 0;
let p2Score = 0;

let player1Score = document.querySelector('#player1Score');
let player2Score = document.querySelector('#player2Score');
let addScoretoPlayer1Btn = document.querySelector('#addScoreToPlayer1');
let addScoreToPlayer2Btn = document.querySelector('#addScoreToPlayer2');

let resetBtn = document.querySelector('#resetButton');

addScoretoPlayer1Btn.addEventListener('click',function(){
    p1Score ++;
    player1Score.innerText = p1Score;
    anyPlayerWon()
});
addScoreToPlayer2Btn.addEventListener('click',function(){
    p2Score += 1;
    player2Score.innerText = p2Score;
    anyPlayerWon()
});

resetBtn.addEventListener('click',function(){
    // window.location.reload();
    p1Score = 0;
    p2Score = 0;
    player1Score.innerText = p1Score;
    player2Score.innerText = p2Score;
    addScoretoPlayer1Btn.disabled = false;
    addScoreToPlayer2Btn.disabled = false;
    player1Score.classList.remove('won');
    player1Score.classList.remove('lost');
    player2Score.classList.remove('won');
    player2Score.classList.remove('lost');
});

function anyPlayerWon(){
    if(p1Score==5){
        console.log('player 1 won!');
        addScoretoPlayer1Btn.disabled = true;
        addScoreToPlayer2Btn.disabled = true;
        player1Score.classList.add('won');
        player2Score.classList.add('lost');

    }else if(p2Score==5){
        console.log('player 2 won!');
        addScoretoPlayer1Btn.disabled = true;
        addScoreToPlayer2Btn.disabled = true;
        player1Score.classList.add('lost');
        player2Score.classList.add('won');
    }
}