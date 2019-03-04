// Init Prompt

let prompt = require('prompt');

// Init la val de la banque

let maxBanque = 21;
let minBanque = 16;

let randomBanque = Math.floor(Math.random() * (maxBanque - minBanque + 1)) + minBanque;

// console.log('La banque a', randomBanque);

// Init le joueur

let countPlayer = 0;
let randomJoueur;

console.log(" \nBLACKJACK\n----------\nVous êtes à O, c'est parti !");

// Init la val random du Joueur

let maxJoueur = 11;
let minJoueur = 1;

function RandomPlayer() {
    randomJoueur = Math.floor(Math.random() * (maxJoueur - minJoueur + 1)) + minJoueur;

    return countPlayer = countPlayer + randomJoueur;
    console.log('Vous êtes à ' + countPlayer);
}

// Init de la rep

var again = {
    description: 'Tirer une carte ? (reponse: "yes","y","no" ou "n")',
    type: 'string',
    required: true,
};

// Go prompt

prompt.start();

// Init function Compare

function Compare(numJoueur, numBanque) {
    //console.log(numJoueur);
    //console.log(numBanque);

    if (numJoueur > 20) {
        console.log('Vous avez perdu :/');
    } else if ((numJoueur < 21) && (numJoueur > numBanque)) {
        console.log('Vous avez gagné !!!');
    } else if (numJoueur < numBanque) {
        console.log('Vous avez perdu :/');
    } else if (numBanque === 21) {
        console.log('Vous avez perdu :/');
    } else if (numJoueur === 21) {
        console.log('Vous avez gagné !!!');
    }
}

// Init function Ask

function Ask() {
    prompt.get(again, function (err, result) {
        if ((result.question === 'yes') || (result.question === 'y')) {
            console.log("Vous êtes à " + RandomPlayer());
            Ask();
        } else if ((result.question === 'no') || (result.question === 'n')) {
            console.log('Ok ! Comparons les scores');
            console.log('Vous êtes à ' + countPlayer + ". La banque est à " + randomBanque + ".")
            Compare(countPlayer, randomBanque);
        } else {
            console.log(result.question + " n'est pas une réponse valide");
            Ask();
        }
    });
}

Ask();
