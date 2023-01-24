let compChoice = Math.floor((Math.random() * 5) + 1);
console.log(compChoice);
let playerChoice;
let main = document.querySelector("main");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");

let resultDiv = document.createElement('div');
resultDiv.id = 'result';
resultDiv.class = 'result';
main.appendChild(resultDiv);
resultDiv.style.display = "none";

const playerRock = () => {

    resultDiv.style.display = "block";
    if(compChoice === 3)
        {
            resultDiv.innerHTML = `
            <p>You chose rock and the computer chose Scissors</p>
            <p>Rock crushes Scissors!</p>
            <p>You win!!!!!</p>
            `;
        }

    if(compChoice === 4)
        {
            resultDiv.innerHTML = `
            <p>You chose Rock and the computer chose Lizard</p>
            <p>Rock crushes Lizard!</p>
            <p>You win!!!!!</p>            
            `;
        }
    
    if(compChoice === 2)
        {
            resultDiv.innerHTML = `
            <p>You chose Rock and the computer chose Paper</p>
            <p>Paper covers Rock!</p>
            <p>You lose :(</p>
            `;
        }

    if(compChoice === 5)
        {
            resultDiv.innerHTML = `
            <p>You chose Rock and the computer chose Spock</p>
            <p>Spock vaporizes Rock!</p>
            <p>You lose :(</p>
            `;
        }
    
    if(compChoice === 1)
        {
            resultDiv.innerHTML = `
            <p>You both chose Rock</p>
            <p>It's a draw!</p>
            `;
        }
}

const playerPaper = () => {
    resultDiv.style.display = "block";
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
    
    else {
        resultDiv.innerHTML = `
        <p>You both chose ${playerChoice}</p>
        <p>It's a draw!</p>
        `;
    }

}

rock.addEventListener('click', playerRock);

paper.addEventListener('click', playerPaper);

scissors.addEventListener('click', () => {
    playerChoice = 3;
});

lizard.addEventListener('click', () => {
    playerChoice = 4;
});

spock.addEventListener('click', () => {
    playerChoice = 5;
})


//Below are 3 if statements if the user chooses 1 (Rock)
if(playerChoice === 1 && compChoice === 3)
{
console.log(playerChoice);
console.log("test");
let resultDiv = document.createElement('div');
resultDiv.id = 'userRock';
resultDiv.class = 'userRock';
main.appendChild(resultDiv);
resultDiv.innerHTML = `
<p>You chose rock and the computer chose Scissors</p>
<p>Rock crushes Scissors!</p>
<p>You win!!!!!</p>
`;
}

if (playerChoice) {
    console.log("test");
}


