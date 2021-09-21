let firstName = prompt('Welkom! Wat is je naam?');
alert('Hey ' + firstName);

const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};
let min = prompt('Vanaf welk getal wil je raden?');
let max = prompt('Tot welk getal wil je raden?');
const numberToGuess = getRandomIntInclusive(min, max);
let wantToGuess = true;
let triesToGuess = 5;

while(wantToGuess){
    for(let i = triesToGuess; i >= 0; i--){
        let guessNumber = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');
        if(guessNumber == numberToGuess){
            alert('Gefeliciteerd je hebt gewonnen');
            wantToGuess = false
            i = 0;
        } else {
            alert('Dat is niet correct, je hebt nog ' + i + ' pogingen om te raden');
            if(i === 0){
                wantToGuess = false
            } else {
                let askWantToGuess = prompt('Wil je nog een keer raden? (Y/N)');
                if (askWantToGuess === 'Y' || askWantToGuess === 'y') {
                    wantToGuess = true;
                } else {
                    wantToGuess = false;
                };
            };
        };
    };
};

alert('Dag ' + firstName + '. Tot de volgende keer');