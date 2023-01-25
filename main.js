// let compChoice = Math.floor((Math.random() * 5) + 1);
const randNum = () => {
    return Math.floor((Math.random() * 5) + 1);
} 
let compChoice = randNum();
// console.log(compChoice);
let playerChoice;
let main = document.querySelector("main");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let playAgain = document.getElementById("play-again");
let playAgainDiv = document.getElementById("play-again-div");

let resultDiv = document.createElement('div');
resultDiv.id = 'result';
resultDiv.class = 'result';
// main.appendChild(resultDiv);
playAgainDiv.prepend(resultDiv);
resultDiv.style.display = "none";

const playerRock = () => {
    resultDiv.style.display = "block";
    playAgain.style.display = "block";
    playerChoice = "Rock";
    if(compChoice === 3)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Scissors</p>
            <p>${playerChoice} crushes Scissors!</p>
            <p>You win!!!!!</p>
            `;
        }

    if(compChoice === 4)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Lizard</p>
            <p>${playerChoice} crushes Lizard!</p>
            <p>You win!!!!!</p>            
            `;
        }
    
    if(compChoice === 2)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Paper</p>
            <p>Paper covers ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }

    if(compChoice === 5)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Spock</p>
            <p>Spock vaporizes ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }
    
    if(compChoice === 1) {
        resultDiv.innerHTML = `
        <p>You both chose ${playerChoice}</p>
        <p>It's a draw!</p>
        `;
    }
}

const playerPaper = () => {
    resultDiv.style.display = "block";
    playAgain.style.display = "block";
    playerChoice = 'Paper';
    if(compChoice === 1)
        {
            resultDiv.innerHTML = `
            <p>You chose Paper and the computer chose Rock</p>
            <p>Paper covers Rock!</p>
            <p>You win!!!!!</p>
            `;
        }

    if(compChoice === 5)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Spock</p>
            <p>${playerChoice} disproves Spock!</p>
            <p>You win!!!!!</p>            
            `;
        }
    
    if(compChoice === 3)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Scissors</p>
            <p>Scissors cuts ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }

    if(compChoice === 4)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Lizard</p>
            <p>Lizard eats ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }
    
    if(compChoice === 2) {
        resultDiv.innerHTML = `
        <p>You both chose ${playerChoice}</p>
        <p>It's a draw!</p>
        `;
    }

}

const playerScissors = () => {
    resultDiv.style.display = "block";
    playAgain.style.display = "block";
    playerChoice = 'Scissors';
    if(compChoice === 2)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Paper</p>
            <p>${playerChoice} cuts Paper!</p>
            <p>You win!!!!!</p>
            `;
        }

    if(compChoice === 4)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Lizard</p>
            <p>${playerChoice} decapitate Lizard!</p>
            <p>You win!!!!!</p>            
            `;
        }
    
    if(compChoice === 1)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Rock</p>
            <p>Rock crushes ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }

    if(compChoice === 5)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Spock</p>
            <p>Spock smashes ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }
    
    if(compChoice === 3) {
        resultDiv.innerHTML = `
        <p>You both chose ${playerChoice}</p>
        <p>It's a draw!</p>
        `;
    }

}

const playerLizard = () => {
    resultDiv.style.display = "block";
    playAgain.style.display = "block";
    playerChoice = 'Lizard';
    if(compChoice === 2)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Paper</p>
            <p>${playerChoice} eats Paper!</p>
            <p>You win!!!!!</p>
            `;
        }

    if(compChoice === 5)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Spock</p>
            <p>${playerChoice} poisons Spock!</p>
            <p>You win!!!!!</p>            
            `;
        }
    
    if(compChoice === 1)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Rock</p>
            <p>Rock crushes ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }

    if(compChoice === 3)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Scissors</p>
            <p>Scissors decapitate ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }
    
    if(compChoice === 4) {
        resultDiv.innerHTML = `
        <p>You both chose ${playerChoice}</p>
        <p>It's a draw!</p>
        `;
    }

}

const playerSpock = () => {
    resultDiv.style.display = "block";
    playAgain.style.display = "block";
    playerChoice = 'Spock';
    if(compChoice === 1)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Rock</p>
            <p>${playerChoice} vaporizes Rock!</p>
            <p>You win!!!!!</p>
            `;
        }

    if(compChoice === 3)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Scissors</p>
            <p>${playerChoice} smashes Scissors!</p>
            <p>You win!!!!!</p>            
            `;
        }
    
    if(compChoice === 2)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Paper</p>
            <p>Paper disproves ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }

    if(compChoice === 4)
        {
            resultDiv.innerHTML = `
            <p>You chose ${playerChoice} and the computer chose Lizard</p>
            <p>Lizard poisons ${playerChoice}!</p>
            <p>You lose :(</p>
            `;
        }
    
    if(compChoice === 5) {
        resultDiv.innerHTML = `
        <p>You both chose ${playerChoice}</p>
        <p>It's a draw!</p>
        `;
    }

}

rock.addEventListener('click', playerRock);

paper.addEventListener('click', playerPaper);

scissors.addEventListener('click', playerScissors);

lizard.addEventListener('click', playerLizard);

spock.addEventListener('click', playerSpock);

playAgain.addEventListener('click',() => {
    resultDiv.style.display = "none";
    compChoice = randNum();
    // console.log(compChoice);
    playAgain.style.display = "none";
});