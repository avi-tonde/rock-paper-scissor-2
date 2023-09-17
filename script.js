
const userChoice = document.querySelectorAll('[data-selection]');
userChoice.forEach(getUserSelection => {
    getUserSelection.addEventListener('click', e => {
        const userSelection = getUserSelection.dataset.selection;  //get user selection      
        const computerSelection = computerChoice(); //get computer selection

        checkWinner(userSelection, computerSelection); // checking winner
       
    })
})


//Create Computer Choice
function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            computerPick = "rock"
            break;
        case 1:
            computerPick = "paper"
            break;
        case 2:
            computerPick = "scissor"
            break;
    }
    return computerPick;
}


























//Function to check the winner
function checkWinner(userSelection, computerSelection ){
    if(computerSelection == userSelection){
        console.log("TIE");
    }else if (computerSelection == 'rock' && userSelection =='scissor') {
        console.log("Computer Own")
    }else if (computerSelection == 'scissor' && userSelection =='paper') {
        console.log("Computer Own")
    }else if (computerSelection == 'paper' && userSelection =='rock') {
        console.log("Computer Own")
    }else{
        console.log('You Own');
    }
}

