
let player = {
    name: "Asante",
    chips : 198
}
let cards = [];
let sum = 0;
let blackjack = false;
let isAlive = true;
let message = " "; 
let messageEl = document.getElementById("welcome-elem");
let sumEl = document.getElementById("sum-elem");
let cardsEl = document.getElementById("cards-elem");
let playerEl = document.getElementById("player-elem");

playerEl.textContent = player.name + " ,You have " + player.chips + " chips left" ;

function getRandomCard(){

    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10){
        return 11;
    } else if (randomNumber === 1){
        return 10;
    } else {
        return randomNumber;
    }

}

console.log( getRandomCard());

function startGame() {

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    isAlive = true;

    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    
    for ( let i = 0; i < cards.length; i++){

        cardsEl.textContent += cards[i] + " ";
        console.log(cards[i]);
    }
    
    sumEl.textContent = "Sum: " + sum;
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
    
}

function newCard () {

     if (isAlive === true && blackjack === false ){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

    
}


