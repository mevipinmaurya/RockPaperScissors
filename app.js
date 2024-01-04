// console.log("Hey there")

let userScore = 0
let compScore = 0


const choices = document.querySelectorAll(".imgContainer")
let msgPopup = document.getElementById("msgPopup")
let popups = document.getElementById("popup")
let uScore = document.getElementById("userScore")
let cScore = document.getElementById("compScore")


const genCompChoices = () => {
    // Generate Random rock, paper, scissors
    const options = ['rock', 'paper', 'scissors']
    // console.log(Math.random(options))
    // console.log()
    let compChoice = Math.floor(Math.random() * 3)
    return options[compChoice];
}

// Draw game
const drawGame = () => {
    popups.classList.remove("hide")
    msgPopup.innerText = "Match Draw !!! 😐😐😐"
}

// User Winner
const userWinner = () => {
    popups.classList.remove("hide")
    msgPopup.innerText = "Congratulations !! You are Winner 🤩🤩🤩"
    userScore += 1
    uScore.innerText = userScore
}

// Computer Winner
const compWinner = () => {
    popups.classList.remove("hide")
    msgPopup.innerText = "Computer Won !!!"
    compScore += 1
    cScore.innerText = compScore
}


const playGame = (userChoiceId) => {
    console.log(`User choosed = ${userChoiceId}`)
    // Generate Computer Choice
    let compchoiceId = genCompChoices()
    console.log(`Computer choosed = ${compchoiceId}`)

    if (userChoiceId === compchoiceId) {
        drawGame()
    }
    else {
        let userWin = true
        if (userChoiceId === "rock") {
            // paper, scissors
            userWin = compchoiceId === "paper" ? false : true;
        }
        else if (userChoiceId === "paper") {
            // rock, scissors
            userWin = compchoiceId === "rock" ? true : false;
        }
        else if (userChoiceId === "scissors") {
            // rock, paper
            userWin = compchoiceId === "rock" ? false : true;
        }

        if (userWin) {
            // console.log("User has won this game")
            userWinner()
        }
        else {
            // console.log("Computer has won this game")
            compWinner()
        }
    }
}

choices.forEach(element => {
    element.addEventListener("click", () => {
        let userChoiceId = element.getAttribute("id");
        // console.log(ids)
        // console.log(`${userChoiceId} was clicked`)
        playGame(userChoiceId);
    })
});
