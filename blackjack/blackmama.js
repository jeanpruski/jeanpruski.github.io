var prompt = require("prompt");

prompt.start();

var bankmax = 21;
console.log(bankmax);

var bankmin = 16;
console.log(bankmin);

var monscore = 0;
console.log(monscore);

console.log("tirer une carte possédant une valeur aléatoire entre 1 et 11");

var card = {
    description: "Voulez vous rejouer ?"
};



function blackjack() {
    prompt.get(card, function (err, result) {

        var monscore = result.question;
        var hasard = Math.floor(Math.random() * (11 - 1 + 1)) + 1;

        if (monscore === '') {
            monscore = monscore + hasard;
            console.log('LE SCORE EST: ' + monscore);

            if (monscore < 21) {
                monscore = monscore + hasard;
                console.log('LE RESULTAT EST: perdant' + monscore);
                return

            } else if (monscore === 21) {
                console.log('c’ est gagneé Black Jack' + monscore);
                return
            }

        }

        console.log('Result question:', result.question);
    });
}

blackjack();
