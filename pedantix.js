// Pour gagner du temps au jeu Pedantix : https://cemantix.certitudes.org/pedantix
// Source : https://www.reddit.com/r/cemantix/comments/vjjpps/script_pedantix/?rdt=64067
function traiter_liste(Liste) {
    $("#pedantix-guess").value = Liste[0];
    $('#pedantix-guess-btn').click();
    Liste.splice(0,1);
    if (Liste.length > 0) {
        setTimeout(function(){ traiter_liste(Liste) }, TIMEOUT);
    }
}
function traiter_liste2(Liste) {
  ii = 0;
  while (ii<nbmots) {
    $("#pedantix-guess").value = Liste[ii];
    $('#pedantix-guess-btn').click();
//    console.log(Liste[ii]);
// Pas possible de faire une simple "pause" ==> setTimeout(...)
    ii++;
  }
}
let liste_mots = ['le', 'de', 'du', 'au', 'à', 'que', 'qui', 'il', 'elle', 'on', 'être', 'avoir', 'homme', 'femme', 'un', 'une', 'ce', 'se', 'à', 'ou', 'où', 'et', 'au', 'alors', 'afin', 'pour', 'or', 'donc', 'faire', 'pouvoir', 'son','ça', 'ce', 'ceci', 'cela', 'tout', 'toute', 'tous', 'tour', 's', 't', 'n', 'y', 'c', 'l', 'avant', 'après', 'e', 'siècle', 'animal', 'insecte', 'sport', 'art', 'science', 'physique', 'en', 'ne', 'pas', 'par', 'pour', 'car', 'cas', 'dans', 'avec', 'sans', 'plus', 'moins', 'tout', 'guerre', 'faut', 'pays', 'ville', 'langue', 'exemple', 'début', 'fin', 'forme', 'temps', 'date', 'durée', 'année', 'famille', 'oiseau', 'période', 'grand', 'petit', 'habitant', 'population', 'nombre', 'certain', 'espèce', 'taille', 'chaud', 'froid', 'né', 'mort', 'arbre', 'feuille', 'végétaux', 'nord', 'sud', 'ouest', 'fleur', 'arbre', 'mesure', 'monde', 'origine'];
var TIMEOUT = 200;
var nbmots = liste_mots.length;
//	console.log('Nb mots : ' + nbmots);
traiter_liste(liste_mots);
