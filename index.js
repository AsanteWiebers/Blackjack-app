let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard ];
let sum = firstCard + secondCard;
let blackjack = false;
let isAlive = true;
let message = " "; 
let messageEl = document.getElementById("welcome-elem");
let sumEl = document.getElementById("sum-elem");
let cardsEl = document.getElementById("cards-elem");

function getRandomCard(){
   let randomNumber = Math.floor(Math.random () * 14) + 1;
   return randomNumber;
  
}
    console.log( getRandomCard()); 
function startGame() {
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

    let card = getRandomCard();
    sum += card;

    console.log(cards);
    cards.push(card);
    renderGame();
}



    


 