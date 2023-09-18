
const userChoice = document.querySelectorAll('[data-selection]');
userChoice.forEach(getUserSelection => {
    getUserSelection.addEventListener('click', e => {
        const userSelection = getUserSelection.dataset.selection;  //get user selection      
        const computerSelection = computerChoice(); //get computer selection

        checkWinner(userSelection, computerSelection); // checking winner

        document.getElementById("userChoice").src = "Resources/icons/" + userSelection + ".svg";
        document.getElementById("pcChoice").src = "Resources/icons/" + computerSelection + ".svg";
    })
})

const playArea = document.getElementById('playArea');
const showResult = document.getElementById('showResult');
const result = document.getElementById('result');



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
function checkWinner(userSelection, computerSelection) {

    if (computerSelection == userSelection) {
        console.log("TIE");
        tie();
    } else if (computerSelection == 'rock' && userSelection == 'scissor') {
        console.log("Computer Own");
        computerWin();
    } else if (computerSelection == 'scissor' && userSelection == 'paper') {
        console.log("Computer Own");
        computerWin();
    } else if (computerSelection == 'paper' && userSelection == 'rock') {
        console.log("Computer Own");
        computerWin();
    } else {
        console.log('You Own');
        youWin();
    }
}

function computerWin() {
    playArea.style.display = "none";
    showResult.style.display = "flex";
    btnEffect('.pc-win', 'add');
}
function youWin() {
    playArea.style.display = "none";
    showResult.style.display = "flex";
    btnEffect('.you-win', 'add');
}
function tie() {
    playArea.style.display = "none";
    showResult.style.display = "flex";
    result.innerText = "TIE";
    // btnEffect('.you-win', 'add');
}

function btnEffect(classname, action) {
    if (action == 'add') {
        const elements = document.querySelectorAll(classname);
        elements[0].classList.add('bgc3');
        elements[1].classList.add('bgc2');
        elements[2].classList.add('bgc1');
        if (classname == '.you-win') {
            result.innerText = "YOU WIN";
        } else if (classname == '.pc-win') {
            result.innerText = "YOU LOST";
        }
    }
    else {
        const elements = document.querySelectorAll('.effect');
        elements.forEach((element) => {
            element.classList.remove("bgc3", "bgc2", "bgc1");
        });

        result.innerText = " ";
    }
}



function playAgain() {
    playArea.style.display = "flex";
    showResult.style.display = "none";

    btnEffect('', '')

}

function openModel() {

}

function closeModel() {

}