let chance = -1;
let score1 = 0;
let score2 = 0;

let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('.top');
let user1ScoreP = document.querySelector('#userScore');
let user2ScoreP = document.querySelector('#compScore');

let choiceId1, choiceId2;

const showUserWin = (user1Win, choiceId1, choiceId2) =>{
    if (user1Win){
        msg.innerText = 'PLAYER 2 WINS' ;
        msg.style.color = 'green';
        score2++;
        user2ScoreP.innerText = score2;
    }else{
        msg.innerText = 'PLAYER 1 WINS' ;
        msg.style.color = 'green';
        score1++;
        user1ScoreP.innerText = score1;
    }
    setTimeout(function() {
        msg.innerText = 'PLAYER 1';
        msg.style.color = '#8B4513';
    }, 2000); 
}

const drawGame = () => {
    msg.innerText = 'Its a DRAW!!!'
    msg.style.color = 'white';
    setTimeout(function() {
        msg.innerText = 'PLAYER 1'
        msg.style.color = '#8B4513'
    }, 2000); 
}

const playGame = (choiceId1, choiceId2) => {

    if (choiceId1 === choiceId2){
        drawGame();
    }else{
        let user1Win = true;
        if (choiceId1 === 'rock'){
            user1Win = choiceId2 === 'paper' ? false : true;
        }else if (choiceId1 === 'paper'){
            user1Win = choiceId2 === 'scissors'? false : true;
        }else {
            user1Win = choiceId2 === 'rock'? false : true;
        }
        showUserWin(user1Win, choiceId1, choiceId2);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        if (chance === 1){
            msg.innerText = 'PLAYER 1'
            choiceId1 = choice.getAttribute('id');
        } else{
            msg.innerText = 'PLAYER 2'
            choiceId2 = choice.getAttribute('id');
        }
        chance = chance * -1;
        if (choiceId1 && choiceId2 ){
            playGame(choiceId1, choiceId2)
            choiceId1 =0;
            choiceId2 =0;
        }
    })
})

