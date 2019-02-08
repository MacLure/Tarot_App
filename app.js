
// DATABASE

let tarotDeck = ["0 – The Fool", "I – The Magician", "II – The High Priestess", "III – The Empress", "IV – The Emperor", "V – The Hierophant", "VI – The Lovers", "VII – The Chariot", "VIII – Strength", "IX – The Hermit", "X – Wheel of Fortune", "XI – Justice", "XII – The Hanged Man", "XIII – Death", "XIV – Temperance", "XV – The Devil", "XVI – The Tower", "XVII – The Star", "XVIII – The Moon", "XIX – The Sun", "XX – Judgement", "XXI – The World", "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands","Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups",  "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords"];
let randomCardIndex = [Math.floor(Math.random() * 22)];
let newCard = tarotDeck[randomCardIndex];
let newCardImage = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
let isUpsideDown = false;
let tarotDeckLength = 75;
let majorArcanaLength = 22;

let cardImage1 = document.getElementById("cardImage1").src = './tarot_card_images/card-back.jpg';
let cardImage2 = document.getElementById("cardImage2").src = './tarot_card_images/card-back.jpg';
let cardImage3 = document.getElementById("cardImage3").src = './tarot_card_images/card-back.jpg';

let draw1Enabled = true;
let draw2Enabled = false;
let draw3Enabled = false;


reset();

// INTERACTIVITY

// Callback Functions:



function reset() {
    tarotDeck = ["0 – The Fool", "I – The Magician", "II – The High Priestess", "III – The Empress", "IV – The Emperor", "V – The Hierophant", "VI – The Lovers", "VII – The Chariot", "VIII – Strength", "IX – The Hermit", "X – Wheel of Fortune", "XI – Justice", "XII – The Hanged Man", "XIII – Death", "XIV – Temperance", "XV – The Devil", "XVI – The Tower", "XVII – The Star", "XVIII – The Moon", "XIX – The Sun", "XX – Judgement", "XXI – The World", "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands","Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups",  "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords"];
    tarotDeckLength = 75;
    majorArcanaLength = 22;
    document.getElementById("cardSpace1").innerHTML = '';
    document.getElementById("cardSpace2").innerHTML = '';
    document.getElementById("cardSpace3").innerHTML = '';

    cardImage1 = document.getElementById("cardImage1").src = './tarot_card_images/card-back.jpg';
    cardImage2 = document.getElementById("cardImage2").src = './tarot_card_images/card-back.jpg';
    cardImage3 = document.getElementById("cardImage3").src = './tarot_card_images/card-back.jpg';


    document.getElementById("isUpsideDownText1").innerHTML = '';
    document.getElementById("isUpsideDownText2").innerHTML = '';
    document.getElementById("isUpsideDownText3").innerHTML = '';


    document.getElementById("cardImage1").classList += " nextDraw";
    document.getElementById("cardImage2").className = "";
    document.getElementById("cardImage3").className = "";

    draw1Enabled = true;
    draw2Enabled = false;
    draw3Enabled = false;

    document.getElementById("includeUpsideDown").disabled = false;
    document.getElementById('majorArcanaOnly').disabled = false;


}

// function updateCardImage1() {
//     document.getElementById("cardImage1").src = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
//     document.getElementById("cardImage1").alt = 'test';
// }

function randomUpsideDown() {
    isUpsideDown = (Math.floor(Math.random() * 2) == 0);
}

function randomCard() {
    if (document.getElementById('majorArcanaOnly').checked) {
        randomCardIndex = [Math.floor(Math.random() * majorArcanaLength)];
        newCard = tarotDeck[randomCardIndex];
    } else {
        randomCardIndex = [Math.floor(Math.random() * tarotDeckLength)];
        newCard = tarotDeck[randomCardIndex];
    }
}

function removeCardFromDeck() {
    var cardIndex = tarotDeck.indexOf(newCard);
    if (document.getElementById('majorArcanaOnly').checked) {
        tarotDeck.splice(cardIndex, 1);
        majorArcanaLength --;
    } else {
        tarotDeck.splice(cardIndex, 1);
        tarotDeckLength --;        
    }
}

// Card Draw Functions:

function draw1() {
    if (draw1Enabled) {
        randomCard();
        randomUpsideDown();
        if (isUpsideDown && (document.getElementById('includeUpsideDown').checked)){
            document.getElementById("cardSpace1").innerHTML = newCard;
            document.getElementById("cardImage1").src = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
            document.getElementById("cardImage1").alt = tarotDeck[randomCardIndex] + ', upaide down';
            document.getElementById("cardImage1").className += " upsideDown";
            document.getElementById("isUpsideDownText1").innerHTML = "(upside down)";
            
        } else {
            document.getElementById("cardSpace1").innerHTML = newCard;
            document.getElementById("cardImage1").src = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
            document.getElementById("cardImage1").alt = tarotDeck[randomCardIndex];
            document.getElementById("cardImage1").className = "";
            document.getElementById("isUpsideDownText1").innerHTML = "";

        }
        removeCardFromDeck()

        draw1Enabled = false;
        draw2Enabled = true;

        document.getElementById("cardImage2").classList += " nextDraw";
        document.getElementById("cardImage1").classList.remove("nextDraw");
        document.getElementById("includeUpsideDown").disabled = true;
        document.getElementById('majorArcanaOnly').disabled = true;
    }
}

function draw2() {
    if (draw2Enabled) {
        randomCard()
        randomUpsideDown();
        if (isUpsideDown && (document.getElementById('includeUpsideDown').checked)){
            document.getElementById("cardSpace2").innerHTML = newCard;
            document.getElementById("cardImage2").src = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
            document.getElementById("cardImage2").className += " upsideDown";
            document.getElementById("cardImage2").alt = tarotDeck[randomCardIndex] + ', upaide down';
            document.getElementById("isUpsideDownText2").innerHTML = "(upside down)";

        } else {
            document.getElementById("cardSpace2").innerHTML = newCard;
            document.getElementById("cardImage2").src = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
            document.getElementById("cardImage2").alt = tarotDeck[randomCardIndex];
            document.getElementById("isUpsideDownText2").innerHTML = "";

        }
        removeCardFromDeck()

        draw2Enabled = false;
        draw3Enabled = true;

        document.getElementById("cardImage3").classList += " nextDraw";
        document.getElementById("cardImage2").classList.remove("nextDraw");
    }
}
function draw3() {
    if (draw3Enabled) {
        randomCard()
        randomUpsideDown();
        if (isUpsideDown && (document.getElementById('includeUpsideDown').checked)){
            document.getElementById("cardSpace3").innerHTML = newCard;
            document.getElementById("cardImage3").src = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
            document.getElementById("cardImage3").className += " upsideDown";
            document.getElementById("cardImage3").alt = tarotDeck[randomCardIndex] + ', upaide down';
            document.getElementById("isUpsideDownText3").innerHTML = "(upside down)";

        } else {
            document.getElementById("cardSpace3").innerHTML = newCard;
            document.getElementById("cardImage3").src = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
            document.getElementById("cardImage3").alt = tarotDeck[randomCardIndex];
            document.getElementById("isUpsideDownText3").innerHTML = "";
        }
        removeCardFromDeck()

        draw3Enabled = false;

        document.getElementById("cardImage3").classList.remove("nextDraw");
    }
}


