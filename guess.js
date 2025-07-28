let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const Input = document.querySelector('#guessField');
const guessDisplay = document.querySelector('.lastResult');
const remaining = document.querySelector('.remaining');

const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guessValue = parseInt(Input.value); 
        validateGuess(guessValue);
    });
}

function validateGuess(guessValue) {
    if (guessValue < 1 || guessValue > 100 || guessValue === '' || isNaN(guessValue)) {
        alert('Please enter a number between 1 and 100');
    } else {
        
        if (numGuess>9) {
            displayGuess(guessValue);
            displayMessage(`Game Over, Random number was ${randomNum}`);
            endGame();
        } else {
            
            displayGuess(guessValue);
            checkGuess(guessValue);
        }
    }
}

function checkGuess(guessValue) {
    if (guessValue === randomNum) {
        displayMessage(`You guessed the number right...!!!`);
        endGame();
    } else if (guessValue < randomNum) {
        displayMessage(`Your Number is low`);
    } else if (guessValue > randomNum) {
        displayMessage(`Your Number is high`);
    }
}

function displayGuess(guessValue) {
    Input.value = '';
    guessDisplay.innerHTML += `${guessValue}  `; 
    numGuess++;
    remaining.innerHTML = `Guess Remaining: ${11 - numGuess}`;
}

function displayMessage(Message) {
    lowOrHigh.innerHTML = `<h2>${Message}</h2>`;
}

function endGame() {
    Input.value = '';
    Input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNum = parseInt(Math.random() * 100 + 1);
        numGuess = 1;
        guessDisplay.innerHTML = '<strong>Previous Guesses: </strong>';
        remaining.innerHTML = `Guess Remaining: ${11 - numGuess}`;
        Input.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        displayMessage(" ")
    });
}
