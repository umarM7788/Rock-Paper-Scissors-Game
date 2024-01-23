let userScore = 0;
let compScore = 0;

let Usersc = document.querySelector("#user-Score");
let Compsc = document.querySelector("#comp-Score");

let choices = document.querySelectorAll(".choice"); //choices array contains 3 choices
let msg = document.querySelector("#msg");



const genCompChoice = ()=>{
    const options = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // Generate a random value from 0 -- 2
    return options[randIdx]; // 0--2 randomly traverses through options array and selects one value.
}

const DrawGame = ()=>{
    console.log("Game was a draw");
    msg.innerText = "Game was a draw!";
    msg.style.backgroundColor = "#081b31";
}

const ShowWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++; //Update user score when he wins
        console.log("You won!");
        Usersc.innerText = userScore; //Update score on screen
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else{
        compScore++; //Update computer score when it wins
        Compsc.innerText = compScore; //Update score on screen
        console.log("You lost!");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log(`${userChoice} was clicked!`); //Prints the choice clicked
    const compChoice = genCompChoice();
    console.log(`${compChoice} was clicked by computer!` );
    
    
    if (userChoice === compChoice) {
        //Draw Game
        DrawGame();
      } else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        ShowWinner(userWin, userChoice, compChoice);
      }
};


choices.forEach((choice)=>{ //Accessing each element in choices array

    
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("Id"); //Accessing individual div
        playGame(userChoice);

        
    })
})

