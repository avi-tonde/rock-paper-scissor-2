
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
const pcScoreDom = document.getElementById('pcScore');
const yourScoreDom = document.getElementById('yourScore');
const modal = document.getElementById('rulesModal');
const closeModal = document.getElementById('closeModal');
const nextBtn = document.getElementById('next-btn');

if (!localStorage.getItem('score')) {
    let scores = { 'yourScore': 0, 'pcScore': 0 };
    localStorage.setItem("score", JSON.stringify(scores));
}

var scores = JSON.parse(localStorage.getItem('score'));
pcScoreDom.innerText = scores.pcScore;
yourScoreDom.innerText = scores.yourScore;

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
    updateResult('.pc-win', 'add', 'pc');
}
function youWin() {
    playArea.style.display = "none";
    showResult.style.display = "flex";
    updateResult('.you-win', 'add', 'you');

}
function tie() {
    playArea.style.display = "none";
    showResult.style.display = "flex";
    result.innerText = "TIE";
    // updateResult('.you-win', 'add');
}

function updateResult(classname, action, winner) {
    if (action == 'add') {

        const elements = document.querySelectorAll(classname);
        elements[0].classList.add('bgc3');
        elements[1].classList.add('bgc2');
        elements[2].classList.add('bgc1');
        if (winner == 'you') {

            result.innerText = "YOU WIN";
            scores.yourScore = scores.yourScore + 1;
            localStorage.setItem('score', JSON.stringify(scores));
            nextBtn.style.display = "block";


        } else if (winner == 'pc') {

            result.innerText = "YOU LOST";
            scores.pcScore = scores.pcScore + 1;
            localStorage.setItem('score', JSON.stringify(scores));

        }

        pcScoreDom.innerText = scores.pcScore;
        yourScoreDom.innerText = scores.yourScore;



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
    nextBtn.style.display = "none";

    updateResult('', '');


}



function openModal() {
    rulesModal.style.display = "block";
}

closeModal.onclick = function closeModal() {
    rulesModal.style.display = "none";
}
