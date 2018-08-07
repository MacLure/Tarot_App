
// DATABASE

const tarotDeck = ["0 – The Fool", "I – The Magician", "II – The High Priestess", "III – The Empress", "IV – The Emperor", "V – The Hierophant", "VI – The Lovers", "VII – The Chariot", "VIII – Strength", "IX – The Hermit", "X – Wheel of Fortune", "XI – Justice", "XII – The Hanged Man", "XIII – Death", "XIV – Temperance", "XV – The Devil", "XVI – The Tower", "XVII – The Star", "XVIII – The Moon", "XIX – The Sun", "XX – Judgement", "XXI – The World", "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands","Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups",  "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords"];
let newCard = tarotDeck[Math.floor(Math.random() * 21)]
let isUpsideDown = false;

// INTERACTIVITY

// Callback Functions:

function randomUpsideDown() {
    isUpsideDown = (Math.floor(Math.random() * 2) == 0);
}

function randomCard() {
    if (document.getElementById('majorArcanaOnly').checked) {
     newCard = tarotDeck[Math.floor(Math.random() * 21)]
    } else {
     newCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)]
    }
}

// Card Draw Functions:

function draw1() {
    randomCard();
    randomUpsideDown();
    if (isUpsideDown === true && (document.getElementById('includeUpsideDown').checked)){
        document.getElementById("cardSpace1").innerHTML = newCard + " (upside down)";
    } else {
        document.getElementById("cardSpace1").innerHTML = newCard;
    }
}

function draw2() {
    randomCard()
    randomUpsideDown();
    if (isUpsideDown === true && (document.getElementById('includeUpsideDown').checked)){
        document.getElementById("cardSpace2").innerHTML = newCard + " (upside down)";
    } else {
        document.getElementById("cardSpace2").innerHTML = newCard;
    }
}

function draw3() {
    randomCard()
    randomUpsideDown();
    if (isUpsideDown === true && (document.getElementById('includeUpsideDown').checked)){
        document.getElementById("cardSpace3").innerHTML = newCard + " (upside down)";
    } else {
        document.getElementById("cardSpace3").innerHTML = newCard;
    }
}


