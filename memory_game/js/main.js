let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

let cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log(`User flipped ${cardsInPlay[0]}`);
console.log(`User flipped ${cardsInPlay[1]}`);

if (cardsInPlay.length === 2) {
  cardsInPlay[0] === cardsInPlay[1]
    ? alert("You found a match!")
    : alert("Sorry, try again");
}
