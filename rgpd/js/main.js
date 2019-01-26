/* HISTORIQUE */

$("#title_historique").click(function () {
    $("#historique").css("display", "none");
    $("#cestquoi").css("display", "flex");
})
$("#back_historique").click(function () {
    location.reload();
})

/* C'EST QUOI ? */

$("#title_cestquoi").click(function () {
    $("#cestquoi").css("display", "none");
    $("#sanctions").css("display", "flex");
})
$("#back_cestquoi").click(function () {
    $("#cestquoi").css("display", "none");
    $("#historique").css("display", "flex");
})

/* QUELLES SANCTIONS ? */

$("#title_sanctions").click(function () {
    $("#sanctions").css("display", "none");
    $("#casertaquoi").css("display", "flex");
})
$("#back_sanctions").click(function () {
    $("#sanctions").css("display", "none");
    $("#cestquoi").css("display", "flex");
})

/* CA SERT A QUOI ? */

$("#title_casertaquoi").click(function () {
    $("#casertaquoi").css("display", "none");
    $("#donnees").css("display", "flex");
})
$("#back_casertaquoi").click(function () {
    $("#casertaquoi").css("display", "none");
    $("#sanctions").css("display", "flex");
})

/* LES DONNEES PERSONNELLES */

$("#title_donnees").click(function () {
    $("#donnees").css("display", "none");
    $("#traitement").css("display", "flex");
})
$("#back_donnees").click(function () {
    $("#donnees").css("display", "none");
    $("#casertaquoi").css("display", "flex");
})

/* TRAITEMENT DES DONNEES */

$("#title_traitement").click(function () {
    location.reload();
})
$("#back_traitement").click(function () {
    $("#traitement").css("display", "none");
    $("#donnees").css("display", "flex");
})

/* BOUTON INTRO */
$("#btn-title").click(function () {
    $("#intro").css("display", "none");
    $("#historique").css("display", "flex");
})

$("#btn-historique").click(function () {
    $("#intro").css("display", "none");
    $("#historique").css("display", "flex");
})

$("#btn-cestquoi").click(function () {
    $("#intro").css("display", "none");
    $("#cestquoi").css("display", "flex");
})

$("#btn-sanctions").click(function () {
    $("#intro").css("display", "none");
    $("#sanctions").css("display", "flex");
})
$("#btn-aquoicasert").click(function () {
    $("#intro").css("display", "none");
    $("#casertaquoi").css("display", "flex");
})
$("#btn-donnees").click(function () {
    $("#intro").css("display", "none");
    $("#donnees").css("display", "flex");
})
$("#btn-traitement").click(function () {
    $("#intro").css("display", "none");
    $("#traitement").css("display", "flex");
})
