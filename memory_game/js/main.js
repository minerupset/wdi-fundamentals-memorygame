let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];

let totalMatches = 0;
let totalFlips = 0;

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    totalMatches++;
    document.getElementById("total-matches").innerHTML = totalMatches;
    alert("You found a match!");
  } else {
    alert("Sorry, try again");
  }
}

function flipCard() {
  let currentCardId = this.getAttribute("data-id");
  let currentCard = cards[currentCardId];
  cardsInPlay.push(currentCard.rank);

  console.log(`User flipped ${currentCard.rank} of ${currentCard.suit}`);
  //console.log(currentCard.cardImage);
  this.setAttribute("src", currentCard.cardImage);

  if (cardsInPlay.length === 2) {
    totalFlips++;
    document.getElementById("total-flips").innerHTML = totalFlips;
    checkForMatch();
    cardsInPlay = [];
    resetBoard();
  }
}

function resetBoard() {
  let allCards = document.querySelectorAll("img");
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].setAttribute("src", "images/back.png");
  }
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

createBoard();

// flipCard(0);
// flipCard(1);
