let userScore = document.querySelector("#users");
let compScore = document.querySelector("#comp");

let uScore = 0;
let cScore = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");

let reset = document.querySelector("#reset");

reset.addEventListener("click" , () => {
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#420039";
    uScore = 0;
    cScore = 0;
    userScore.innerText = uScore;
    compScore.innerText = cScore;
})

const genCompChoice = () => {
    return choices[Math.floor(Math.random() * 3)].getAttribute("id");
}

const gameDrawn = () => {
    // console.log("Game was draw");
    msg.innerText = "Game is draw, Play again";
    msg.style.backgroundColor = "#420039";
}

const userWon = () => {
    uScore += 1;
    userScore.innerText = uScore;
    msg.innerText = "You Won!";
    msg.style.backgroundColor = "green";
}

const compWon = () => {
    cScore += 1;
    compScore.innerText = cScore;
    msg.innerText = "You Lost";
    msg.style.backgroundColor = "Red";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("user choice is ", userChoice);
    console.log("comp choice is ", compChoice);

    if(userChoice === compChoice){
        gameDrawn();
    }
    else if((userChoice === 'rock' && compChoice === 'scissor') || (userChoice === 'paper' && compChoice === 'rock') || (userChoice === 'scissor' && compChoice === 'paper') ){
        userWon();
    }
    else{
        compWon();
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("clicked choice is " ,userChoice);
        playGame(userChoice);
    })
});