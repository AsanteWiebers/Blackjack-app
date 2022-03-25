// let buyItem = document.getElementById("purchase-btn");


// function purchase () {
//     document.getElementById("error").textContent = "Anneloes is de liefste";

// }

// console.log(buyItem);




// Try to predict what each of the lines will log out

// console.log("2" + 2) // "22"
// console.log(11 + 7) // 18
// console.log(6 + "5") // "65"
// console.log("My points: " + 5 + 9) // "My points:" 14
// console.log(2 + 2) // 4
// console.log("11" + "14") // "11" "14" 


// let myPoints = 3;

// function add3Points () {
//     myPoints += 3;
// }

// function remove1Point () {
//     myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();

// remove1Point();
// remove1Point();

// console.log(myPoints);

// let firstname = "Linda";
// let greeting = "Hi there";

// function welcome (){
   
//     console.log(greeting + ", " + firstname);
// }

// welcome();

// let firstName = "Asante";
// let lastName = "Debrah";
// let greeting = firstName + ", " + lastName;

// function welcomeBack() {
//     console.log(greeting);
// } 

// welcomeBack();

// blackjack 
// king = 10
// Ace = 11

// console.log(4 === 3)  // false 4 is equal to 3
// console.log(5 > 2)    // true  5 is greater than 2
// console.log(12 > 12)  // false 12 is greater than 12
// console.log(3 < 0)    // false 3 is less than 0
// console.log(3 >= 3)   // true 3 is equal or greater than 3
// console.log(11 <= 11) // true 11 is less than or equal to 11
// console.log(3 <= 2)   // false 3 is less than or equal to 2

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

// let age = 22 ;

// if ( age < 21){
//     console.log("You can not enter the club!");
// } else { (age > 21) 
//     console.log("Welcome!");
// } 

// let oldAge = 110;

// if (oldAge < 100){
//     console.log("You are not old enough yet");
// } else if (oldAge === 100){
//     console.log("Happy birthday, here is your card from the King!");
// } else {
//     console.log("You already gotten one");
// }

