let firstCard = 8;
let secondCard = 9;
let sum = firstCard + secondCard;
let blackjack = false;
let isAlive = true;
let message = " "; 
let messageEl = document.getElementById("welcome-elem");
let sumEl = document.getElementById("sum-elem");
let cardsEl = document.getElementById("cards-elem");

function startGame() {
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if ( sum === 21){
        message = "Whoo! You've got Blackjack!"
        blackjack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard; 
}

function newCard () {

    console.log("Drawing a new card from the deck!");
    let card = 2;

    sum += card;
    startGame();
}



