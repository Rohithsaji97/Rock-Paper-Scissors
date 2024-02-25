let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll('.choice');
let msg = document.querySelector('.top');

let userScoreP = document.querySelector('#userScore');
let compScoreP = document.querySelector('#compScore');

const drawGame = () => {
    console.log("It's a Draw" )
    msg.innerText = 'Its DRAW. Play AGAIN'
    msg.style.color = '#8B4513'
}

const showUserWin = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScoreP.innerText = userScore;
        console.log('You Won');
        msg.innerText = `You Won!!! Your ${userChoice} beats ${compChoice}`
        msg.style.color = 'green'
    }else {
        compScore++;
        compScoreP.innerText = compScore;
        console.log('You Lose')
        msg.innerText = `You Lose :( ${compChoice} beats your ${userChoice}`
        msg.style.color = 'red'
    }
}

const genCompChoice = () => {
    const options = ['paper','rock','scissors'];
    return options[Math.floor(Math.random()*3)];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(userChoice,compChoice)

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        }else if (userChoice === 'paper'){
            userWin = compChoice === 'scissors'? false : true;
        }else {
            userWin = compChoice === 'rock'? false : true;
        }
        showUserWin(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener('click', () => {
        const choiceId = choice.getAttribute('id');
        playGame(choiceId)
    });
});
