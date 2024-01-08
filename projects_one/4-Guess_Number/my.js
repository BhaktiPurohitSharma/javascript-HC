const randomNumber=parseInt(Math.random()*100+1)
console.log(randomNumber);
const submit = document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const displayGuessArray=document.querySelector('.guesses')
const remainingGuessCounter=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

//provide global scope array in which we are storing gussed value and counter of gusseing value
let guessArray=[];
let guessCounter=1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',(e)=>{
    e.preventDefault();
    //Input value of user
    const userGuess=parseInt(userInput.value)
    console.log(userGuess);
    //calling function to validate user guessed number
    validateGuess(userGuess);  
})
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('PLease enter a valid number');   
    } 
    else if (guess < 1) {
        alert('PLease enter a number more than 1');
    } 
    else if (guess > 100) {
         alert('PLease enter a  number less than 100');
    } else{
        guessArray.push(guess); //adding user guess number to guess array
        //if trial of guessing number is over
        if (guessCounter===10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } 
        else {
            displayGuess(guess);
            checkUserGuess(guess);
          }

    }     
}

//checking user gussed number with random number
function checkUserGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is Lower `);
    } else if (guess > randomNumber) {
        displayMessage(`Number is Higher `);
    }
  }

  //displayong all previouly guessed value of User
  function displayGuess(guess) {
    userInput.value = '';
    //displayong  values
    displayGuessArray.innerHTML += `${guess}, `;
    //increasing counter
    guessCounter++;
    //displayong counter
    remainingGuessCounter.innerHTML = `${11 - guessCounter} `;
  }

  //diplaying message about guessed value is either low/high
  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }

  //if value correctly gussed or trial of guess is over ending game
  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
  
  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      guessArray = [];
      guessCounter = 1;
      guessSlot.innerHTML = '';
      remainingGuessCounter.innerHTML = `${11 - guessCounter} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
    });
  }

