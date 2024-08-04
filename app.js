let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg1 = document.querySelector("#msg");
const userScoreid = document.querySelector("#user-score");
const CompScoreid = document.querySelector("#comp-score");

const draw = () => {
    msg1.innerHTML = 'Game was Draw,Play Again !';
    msg1.style.backgroundColor = "#132A13";
    console.log("It is a draw!");
};

const showWinner = (userWin) => {
    if (userWin) {
        msg1.innerHTML = "You Win!";
        msg1.style.backgroundColor = "green";
        console.log("You Win");
        userScore++;
        userScoreid.innerHTML = userScore;
    } else {
        msg1.innerHTML = "You Lose!";
        msg1.style.backgroundColor = "red";
        console.log("You Lose");
        computerScore++;
        CompScoreid.innerHTML = computerScore;
    }
};

const computerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let ran = Math.floor(Math.random() * 3);
    console.log("Computer Choice:", options[ran]);
    return options[ran];
};

const playGame = (userId) => {
    console.log("User choice:", userId);
    const compchoice = computerChoice();
    let userWin = true;
    if (userId === compchoice) {
        draw();
    } else {
        if (userId === "rock") {
            userWin = compchoice !== "paper";
        } else if (userId === "paper") {
            userWin = compchoice !== "scissor";
        } else {
            userWin = compchoice !== "rock";
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userId = choice.getAttribute("id");
        playGame(userId);
    });
});
