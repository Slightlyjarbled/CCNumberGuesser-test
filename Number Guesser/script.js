let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
    }

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        window.alert ('The number is out of range, please use 0 - 9')
    }
    human = getAbsoluteDistance(target, humanGuess);
    computer = getAbsoluteDistance(target, computerGuess);
    return human <= computer;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1
    } else {
        computerScore += 1
    }
}
const advanceRound = () => currentRoundNumber + 1;



console.log(generateTarget())
console.log(compareGuesses())
console.log(compareGuesses(5))

// const getAbsoluteDistance = (num1, num2) {
   // return Math.abs(num1 - num2)
//}
//human = getAbsoluteDistance(target, humanGuess)
//computer = getAbsoluteDistance(target, computerGuess)
//return human <= computer

// const human = Math.abs(target - humanGuess);
   // const computer = Math.abs(target - computerGuess);
   // return human <= computer