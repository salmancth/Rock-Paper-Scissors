const computerChoice = document.getElementById('computer-choice')
const userChoice = documentdocument.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoicesdocument.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    
}