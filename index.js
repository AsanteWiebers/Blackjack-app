
let firstCard = 12;
let secondCard = 9;
let blackjack = false;
let isAlive = true;
let message = " ";

let sum = firstCard + secondCard;

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if ( sum === 21){
    message = "Whoo! You've got Blackjack!"
    blackjack = true;
} else {
    message = "You're out of the game!";
    isAlive = false;
}

console.log(message);
console.log(blackjack);
console.log(isAlive);

