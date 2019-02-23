
let tarotDeck = ["0 – The Fool", "I – The Magician", "II – The High Priestess", "III – The Empress", "IV – The Emperor", "V – The Hierophant", "VI – The Lovers", "VII – The Chariot", "VIII – Strength", "IX – The Hermit", "X – Wheel of Fortune", "XI – Justice", "XII – The Hanged Man", "XIII – Death", "XIV – Temperance", "XV – The Devil", "XVI – The Tower", "XVII – The Star", "XVIII – The Moon", "XIX – The Sun", "XX – Judgement", "XXI – The World", "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands","Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups",  "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords"];
let randomCardIndex = [Math.floor(Math.random() * 22)];
let newCard = tarotDeck[randomCardIndex];
let newCardImage = './tarot_card_images/' + tarotDeck[randomCardIndex] + '.jpg';
let isUpsideDown = false;
let tarotDeckLength = 75;
let majorArcanaLength = 22;

let draw1Enabled = true;
let draw2Enabled = false;
let draw3Enabled = false;

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

function updateOptions() {
    if (document.getElementById('includeUpsideDown').checked) {
        document.getElementById("upsideDown_YesNo").innerHTML = "Yes"
    } else {
        document.getElementById("upsideDown_YesNo").innerHTML = "No"
    }
    if (document.getElementById('majorArcanaOnly').checked) {
        document.getElementById("majorArcana_YesNo").innerHTML = "Yes"
    } else {
        document.getElementById("majorArcana_YesNo").innerHTML = "No"
    }
    if (document.getElementById('showCardText').checked) {
        document.getElementById("showCardText_YesNo").innerHTML = "Yes"
    } else {
        document.getElementById("showCardText_YesNo").innerHTML = "No"
    }
}



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
    let cardIndex = tarotDeck.indexOf(newCard);
    if (document.getElementById('majorArcanaOnly').checked) {
        tarotDeck.splice(cardIndex, 1);
        majorArcanaLength --;
    } else {
        tarotDeck.splice(cardIndex, 1);
        tarotDeckLength --;        
    }
}

card1.addEventListener( 'click', function() {
    if (draw1Enabled) {
        card1.classList.add("is-flipped");
        randomCard();
        randomUpsideDown();
        if (document.getElementById('showCardText').checked) {
            setTimeout(function() {document.getElementById("card1_title").classList.remove("text_fade_out")}, 800);
            setTimeout(function() {document.getElementById("card1_upside_down").classList.remove("text_fade_out")}, 800);
        }
        if (isUpsideDown && (document.getElementById('includeUpsideDown').checked)){
            document.getElementById("card1_title").innerHTML = newCard;
            document.getElementById("cardImage1").src = './tarot_card_images/' + newCard + '.jpg';
            document.getElementById("cardImage1").alt = newCard + ', upaide down';
            document.getElementById("cardImage1").className += " upsideDown";
            document.getElementById("card1_upside_down").innerHTML = "(upside down)";
            
        } else {
            document.getElementById("card1_title").innerHTML = newCard;
            document.getElementById("cardImage1").src = './tarot_card_images/' + newCard + '.jpg';
            document.getElementById("cardImage1").alt = newCard;
            document.getElementById("cardImage1").className = "";
            document.getElementById("card1_upside_down").innerHTML = "";

        }
        removeCardFromDeck()

        draw1Enabled = false;
        draw2Enabled = true;

        card2.classList.add("nextDraw");
        card1.classList.remove("nextDraw");

        document.getElementById("navbar").classList.add("disabled");

        document.getElementById("includeUpsideDown").disabled = true;
        document.getElementById('majorArcanaOnly').disabled = true;
        document.getElementById('showCardText').disabled = true;

        setTimeout(function() {document.getElementById("to_flash1").classList.add("card_flash");}, 700)
        setTimeout(function() {document.getElementById("to_flash1").classList.remove("card_flash");}, 1700)

    }
});

card2.addEventListener( 'click', function() {
    if (draw2Enabled) {
        card2.classList.add("is-flipped");
        randomCard()
        randomUpsideDown();
        if (document.getElementById('showCardText').checked) {
            setTimeout(function() {document.getElementById("card2_title").classList.remove("text_fade_out")}, 800);
            setTimeout(function() {document.getElementById("card2_upside_down").classList.remove("text_fade_out")}, 800);
        }
        if (isUpsideDown && (document.getElementById('includeUpsideDown').checked)){
            document.getElementById("card2_title").innerHTML = newCard;
            document.getElementById("cardImage2").src = './tarot_card_images/' + newCard + '.jpg';
            document.getElementById("cardImage2").alt = tarotDeck[randomCardIndex] + ', upaide down';
            document.getElementById("cardImage2").className += " upsideDown";
            document.getElementById("card2_upside_down").innerHTML = "(upside down)";
            
        } else {
            document.getElementById("card2_title").innerHTML = newCard;
            document.getElementById("cardImage2").src = './tarot_card_images/' + newCard + '.jpg';
            document.getElementById("cardImage2").alt = newCard;
            document.getElementById("cardImage2").className = "";
            document.getElementById("card2_upside_down").innerHTML = "";

        }
        removeCardFromDeck()

        draw2Enabled = false;
        draw3Enabled = true;

        card3.classList.add("nextDraw");
        card2.classList.remove("nextDraw");

        setTimeout(function() {document.getElementById("to_flash2").classList.add("card_flash");}, 700)
        setTimeout(function() {document.getElementById("to_flash2").classList.remove("card_flash");}, 1700)

    }
});

card3.addEventListener( 'click', function() {
    document.getElementById("logo").classList.add("hidden")

    if (draw3Enabled) {
        card3.classList.add("is-flipped");
        randomCard()
        randomUpsideDown();
        if (document.getElementById('showCardText').checked) {
            setTimeout(function() {document.getElementById("card3_title").classList.remove("text_fade_out")}, 800);
            setTimeout(function() {document.getElementById("card3_upside_down").classList.remove("text_fade_out")}, 800);
        }
        if (isUpsideDown && (document.getElementById('includeUpsideDown').checked)){
            document.getElementById("card3_title").innerHTML = newCard;
            document.getElementById("cardImage3").src = './tarot_card_images/' + newCard + '.jpg';
            document.getElementById("cardImage3").alt = newCard + ', upaide down';
            document.getElementById("cardImage3").className += " upsideDown";
            document.getElementById("card3_upside_down").innerHTML = "(upside down)";
            
        } else {
            document.getElementById("card3_title").innerHTML = newCard;
            document.getElementById("cardImage3").src = './tarot_card_images/' + newCard + '.jpg';
            document.getElementById("cardImage3").alt = newCard;
            document.getElementById("cardImage3").className = "";
            document.getElementById("card3_upside_down").innerHTML = "";

        }
        removeCardFromDeck()

        draw3Enabled = false;

        card3.classList.remove("nextDraw");

        setTimeout(function() {document.getElementById("to_flash3").classList.add("card_flash");}, 700)
        setTimeout(function() {document.getElementById("to_flash3").classList.remove("card_flash");}, 1700)

        document.getElementById("resetButton").disabled = false;
        document.getElementById("resetButton").disabled = false;
        setTimeout(function() {document.getElementById("resetButton").classList.add('show')}, 1000);

    }
});

reset();

function reset() {

    tarotDeck = ["0 – The Fool", "I – The Magician", "II – The High Priestess", "III – The Empress", "IV – The Emperor", "V – The Hierophant", "VI – The Lovers", "VII – The Chariot", "VIII – Strength", "IX – The Hermit", "X – Wheel of Fortune", "XI – Justice", "XII – The Hanged Man", "XIII – Death", "XIV – Temperance", "XV – The Devil", "XVI – The Tower", "XVII – The Star", "XVIII – The Moon", "XIX – The Sun", "XX – Judgement", "XXI – The World", "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands","Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups",  "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords"];
    tarotDeckLength = 75;
    majorArcanaLength = 22;
    draw1Enabled = true;
    draw2Enabled = false;
    draw3Enabled = false;

    card1.classList.add("nextDraw");
    card2.className = "";
    card3.className = "";

    document.getElementById("card1_title").innerHTML = "";
    document.getElementById("card1_upside_down").innerHTML = "";
    document.getElementById("card2_title").innerHTML = "";
    document.getElementById("card2_upside_down").innerHTML = "";
    document.getElementById("card3_title").innerHTML = "";
    document.getElementById("card3_upside_down").innerHTML = "";

    card1.classList.remove("remove_card1");
    card2.classList.remove("remove_card2");
    card3.classList.remove("remove_card3");
}

function doRemoveCardsAnimation() {
    document.getElementById("logo").classList.remove("hidden")

    document.getElementById("card1_title").classList.add("text_fade_out");
    document.getElementById("card2_title").classList.add("text_fade_out");
    document.getElementById("card3_title").classList.add("text_fade_out");

    document.getElementById("card1_upside_down").classList.add("text_fade_out");
    document.getElementById("card2_upside_down").classList.add("text_fade_out");
    document.getElementById("card3_upside_down").classList.add("text_fade_out");

    document.getElementById("resetButton").classList.remove('show');

    document.getElementById("includeUpsideDown").disabled = false;
    document.getElementById('majorArcanaOnly').disabled = false;
    document.getElementById('showCardText').disabled = false;
    document.getElementById("navbar").classList.remove("disabled");



    if (!card1.classList.contains("is-flipped")) {
        removeCardsAnimation();
        setTimeout(reset, 1000);
    } else
    setTimeout(removeCardsAnimation, 600);
        card1.classList.remove("is-flipped");
        card2.classList.remove("is-flipped");
        card3.classList.remove("is-flipped");
        setTimeout(reset, 1700);
    }

function removeCardsAnimation() {
    card1.classList.add("remove_card1");
    card2.classList.add("remove_card2");
    card3.classList.add("remove_card3");

    document.getElementById("card1_title").classList.add("text_fade_out");
    document.getElementById("card2_title").classList.add("text_fade_out");
    document.getElementById("card3_title").classList.add("text_fade_out");

    document.getElementById("card1_upside_down").classList.add("text_fade_out");
    document.getElementById("card2_upside_down").classList.add("text_fade_out");
    document.getElementById("card3_upside_down").classList.add("text_fade_out");

}
