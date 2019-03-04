$(document).ready(function () {

    // Init un mot
    var motATrouver = "SUPER";
    var arrMotATrouver = motATrouver.split('');
    // console.log(arrMotATrouver);


    // Quand je valide mon mot
    var count = 0;

    // J'affiche la première lettre
    $('#L1C1').html(arrMotATrouver[0]);

    // pûis je change le css de la première lettre``
    $('#L1C1').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
    $('#L1C1').css('width', '100%');
    $('#L1C1').css('borderRadius', '20px');

    // Fonction au click 
    $("#button").click(function () {

        document.getElementById('bruit').play();

        // Init let premiere ligne
        var mot1 = $('#area').val().toUpperCase();
        var arrMot1 = mot1.split('');

        // Init let seconde ligne
        var mot2 = $('#area').val().toUpperCase();
        var arrMot2 = mot2.split('');

        // Init let troisieme ligne
        var mot3 = $('#area').val().toUpperCase();
        var arrMot3 = mot3.split('');

        // Init let quatrieme ligne
        var mot4 = $('#area').val().toUpperCase();
        var arrMot4 = mot4.split('');

        // Init let cinquieme ligne    
        var mot5 = $('#area').val().toUpperCase();
        var arrMot5 = mot5.split('');

        // Init let sixieme ligne
        var mot6 = $('#area').val().toUpperCase();
        var arrMot6 = mot6.split('');

        // console.log('Mot A Trouver', arrMotATrouver);
        // console.log('Mot Entré', arrMot1);

        // Init de la boucle qui compare la première lettre du mot à trouver
        for (let j = 0; j < arrMotATrouver.length; j++) {
            // Init recherche first letter
            if (arrMotATrouver[j] === arrMot1[j]) {
                // console.log('Lettre n' + j + " identiques");
            }
        }

        // Compteur au click
        count = count + 1;

        if ((mot1 === motATrouver) || (mot2 === motATrouver) || (mot3 === motATrouver) || (mot4 === motATrouver) || (mot5 === motATrouver) || (mot6 === motATrouver)) {
            console.log('Gagné');
            $('#ask').css('display', 'none');
            $('#gameBoard').css('display', 'none');
            $('#win').css('display', 'block');
        }


        // Init l'affichage en fonction du nombre de clique
        if (count === 1) {
            $('#L1C1').html(arrMot1[0]);

            // On test la première lettre, si dif' on remet en bleu, nikttfdp
            if (arrMot1[0] !== arrMotATrouver[0]) {
                $('#L1C1').css('backgroundImage', 'linear-gradient(#90d2ed, #2064CA)');
            }

            $('#L1C2').html(arrMot1[1]);

            // On test la seconde lettre pour mettre un fond rouge si correct
            if (arrMot1[1] === arrMotATrouver[1]) {
                $('#L1C2').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L1C2').css('width', '100%');
                $('#L1C2').css('borderRadius', '20px');
            }

            $('#L1C3').html(arrMot1[2]);

            // On test la troisieme lettre pour mettre un fond rouge si correct
            if (arrMot1[2] === arrMotATrouver[2]) {
                $('#L1C3').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L1C3').css('width', '100%');
                $('#L1C3').css('borderRadius', '20px');
            }
            $('#L1C4').html(arrMot1[3]);

            // On test la quatrieme lettre pour mettre un fond rouge si correct
            if (arrMot1[3] === arrMotATrouver[3]) {
                $('#L1C4').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L1C4').css('width', '100%');
                $('#L1C4').css('borderRadius', '20px');
            }
            $('#L1C5').html(arrMot1[4]);

            // On test la troisieme lettre pour mettre un fond rouge si correct
            if (arrMot1[4] === arrMotATrouver[4]) {
                $('#L1C5').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L1C5').css('width', '100%');
                $('#L1C5').css('borderRadius', '20px');
            }

            // On change la couleur de la première lettre seconde ligne
            $('#L2C1').html(arrMotATrouver[0]);
            $('#L2C1').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
            $('#L2C1').css('width', '100%');
            $('#L2C1').css('borderRadius', '20px');
        } else if (count === 2) {
            $('#L2C1').html(arrMot2[0]);

            // On test la première lettre, si dif' on remet en bleu, nikttfdp
            if (arrMot2[0] !== arrMotATrouver[0]) {
                $('#L2C1').css('backgroundImage', 'linear-gradient(#90d2ed, #2064CA)');
            }

            $('#L2C2').html(arrMot2[1]);

            // On test la seconde lettre pour mettre un fond rouge si correct
            if (arrMot2[1] === arrMotATrouver[1]) {
                $('#L2C2').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L2C2').css('width', '100%');
                $('#L2C2').css('borderRadius', '20px');
            }

            $('#L2C3').html(arrMot2[2]);

            // On test la troiseme lettre pour mettre un fond rouge si correct
            if (arrMot2[2] === arrMotATrouver[2]) {
                $('#L2C3').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L2C3').css('width', '100%');
                $('#L2C3').css('borderRadius', '20px');
            }

            $('#L2C4').html(arrMot2[3]);

            // On test la quatrieme lettre pour mettre un fond rouge si correct
            if (arrMot2[3] === arrMotATrouver[3]) {
                $('#L2C4').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L2C4').css('width', '100%');
                $('#L2C4').css('borderRadius', '20px');
            }

            $('#L2C5').html(arrMot2[4]);

            // On test la derniere lettre pour mettre un fond rouge si correct
            if (arrMot2[4] === arrMotATrouver[4]) {
                $('#L2C5').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L2C5').css('width', '100%');
                $('#L2C5').css('borderRadius', '20px');
            }

            $('#L3C1').html(arrMotATrouver[0]);
            $('#L3C1').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
            $('#L3C1').css('width', '100%');
            $('#L3C1').css('borderRadius', '20px');
        } else if (count === 3) {
            $('#L3C1').html(arrMot3[0]);

            // On test la première lettre, si dif' on remet en bleu, nikttfdp
            if (arrMot3[0] !== arrMotATrouver[0]) {
                $('#L3C1').css('backgroundImage', 'linear-gradient(#90d2ed, #2064CA)');
            }

            $('#L3C2').html(arrMot3[1]);

            // On test la seconde lettre pour mettre un fond rouge si correct
            if (arrMot3[1] === arrMotATrouver[1]) {
                $('#L3C2').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L3C2').css('width', '100%');
                $('#L3C2').css('borderRadius', '20px');
            }

            $('#L3C3').html(arrMot3[2]);

            // On test la troiseme lettre pour mettre un fond rouge si correct
            if (arrMot3[2] === arrMotATrouver[2]) {
                $('#L3C3').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L3C3').css('width', '100%');
                $('#L3C3').css('borderRadius', '20px');
            }
            $('#L3C4').html(arrMot3[3]);

            // On test la quatrieme lettre pour mettre un fond rouge si correct
            if (arrMot3[3] === arrMotATrouver[3]) {
                $('#L3C4').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L3C4').css('width', '100%');
                $('#L3C4').css('borderRadius', '20px');
            }
            $('#L3C5').html(arrMot3[4]);

            // On test la dernière lettre pour mettre un fond rouge si correct
            if (arrMot3[4] === arrMotATrouver[4]) {
                $('#L3C5').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L3C5').css('width', '100%');
                $('#L3C5').css('borderRadius', '20px');
            }

            $('#L4C1').html(arrMotATrouver[0]);
            $('#L4C1').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
            $('#L4C1').css('width', '100%');
            $('#L4C1').css('borderRadius', '20px');
        } else if (count === 4) {
            $('#L4C1').html(arrMot4[0]);

            // On test la première lettre, si dif' on remet en bleu, nikttfdp
            if (arrMot4[0] !== arrMotATrouver[0]) {
                $('#L4C1').css('backgroundImage', 'linear-gradient(#90d2ed, #2064CA)');
            }

            $('#L4C2').html(arrMot4[1]);

            // On test la seconde lettre pour mettre un fond rouge si correct
            if (arrMot4[1] === arrMotATrouver[1]) {
                $('#L4C2').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L4C2').css('width', '100%');
                $('#L4C2').css('borderRadius', '20px');
            }

            $('#L4C3').html(arrMot4[2]);

            // On test la troisieme lettre pour mettre un fond rouge si correct
            if (arrMot4[2] === arrMotATrouver[2]) {
                $('#L4C3').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L4C3').css('width', '100%');
                $('#L4C3').css('borderRadius', '20px');
            }

            $('#L4C4').html(arrMot4[3]);

            // On test la quatrieme lettre pour mettre un fond rouge si correct
            if (arrMot4[3] === arrMotATrouver[3]) {
                $('#L4C4').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L4C4').css('width', '100%');
                $('#L4C4').css('borderRadius', '20px');
            }

            $('#L4C5').html(arrMot4[4]);

            // On test la dernière lettre pour mettre un fond rouge si correct
            if (arrMot4[4] === arrMotATrouver[4]) {
                $('#L4C5').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L4C5').css('width', '100%');
                $('#L4C5').css('borderRadius', '20px');
            }

            $('#L5C1').html(arrMotATrouver[0]);
            $('#L5C1').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
            $('#L5C1').css('width', '100%');
            $('#L5C1').css('borderRadius', '20px');
        } else if (count === 5) {
            $('#L5C1').html(arrMot5[0]);

            // On test la première lettre, si dif' on remet en bleu, nikttfdp
            if (arrMot5[0] !== arrMotATrouver[0]) {
                $('#L5C1').css('backgroundImage', 'linear-gradient(#90d2ed, #2064CA)');
            }
            $('#L5C2').html(arrMot5[1]);

            // On test la seconde lettre pour mettre un fond rouge si correct
            if (arrMot5[1] === arrMotATrouver[1]) {
                $('#L5C2').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L5C2').css('width', '100%');
                $('#L5C2').css('borderRadius', '20px');
            }

            $('#L5C3').html(arrMot5[2]);

            // On test la troisieme lettre pour mettre un fond rouge si correct
            if (arrMot5[2] === arrMotATrouver[2]) {
                $('#L5C3').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L5C3').css('width', '100%');
                $('#L5C3').css('borderRadius', '20px');
            }

            $('#L5C4').html(arrMot5[3]);

            // On test la quatrieme lettre pour mettre un fond rouge si correct
            if (arrMot5[3] === arrMotATrouver[3]) {
                $('#L5C4').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L5C4').css('width', '100%');
                $('#L5C4').css('borderRadius', '20px');
            }

            $('#L5C5').html(arrMot5[4]);

            // On test la quatrieme lettre pour mettre un fond rouge si correct
            if (arrMot5[4] === arrMotATrouver[4]) {
                $('#L5C5').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L5C5').css('width', '100%');
                $('#L5C5').css('borderRadius', '20px');
            }

            $('#L6C1').html(arrMotATrouver[0]);
            $('#L6C1').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
            $('#L6C1').css('width', '100%');
            $('#L6C1').css('borderRadius', '20px');
        } else if (count === 6) {
            $('#L6C1').html(arrMot6[0]);

            // On test la première lettre, si dif' on remet en bleu, nikttfdp
            if (arrMot6[0] !== arrMotATrouver[0]) {
                $('#L6C1').css('backgroundImage', 'linear-gradient(#90d2ed, #2064CA)');
            }

            $('#L6C2').html(arrMot6[1]);

            // On test la seconde lettre pour mettre un fond rouge si correct
            if (arrMot6[1] === arrMotATrouver[1]) {
                $('#L6C2').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L6C2').css('width', '100%');
                $('#L6C2').css('borderRadius', '20px');
            }

            $('#L6C3').html(arrMot6[2]);

            // On test la troisieme lettre pour mettre un fond rouge si correct
            if (arrMot6[2] === arrMotATrouver[2]) {
                $('#L6C3').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L6C3').css('width', '100%');
                $('#L6C3').css('borderRadius', '20px');
            }

            $('#L6C4').html(arrMot6[3]);

            // On test la quatrieme lettre pour mettre un fond rouge si correct
            if (arrMot6[3] === arrMotATrouver[3]) {
                $('#L6C4').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L6C4').css('width', '100%');
                $('#L6C4').css('borderRadius', '20px');
            }

            $('#L6C5').html(arrMot6[4]);

            // On test la dernière lettre pour mettre un fond rouge si correct
            if (arrMot6[4] === arrMotATrouver[4]) {
                $('#L6C5').css('backgroundImage', 'linear-gradient(#90d2ed, red)');
                $('#L6C5').css('width', '100%');
                $('#L6C5').css('borderRadius', '20px');
            }

            if (mot6 != motATrouver) {

                console.log('perdu fdp');
                $('#ask').css('display', 'none');
                $('#gameBoard').css('display', 'none');
                $('#lose').css('display', 'block');
            }


        } else {
            console.log('Vous avez perdu');

        }
    });

    $('#logo').click(function () {
        location.reload();
    });




});
