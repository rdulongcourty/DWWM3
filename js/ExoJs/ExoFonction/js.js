// ------------ Exo 1 ----------------------

function saluer(prenom) {
    return "Bonjour, " + prenom + "!";
}

let prenom = prompt();
console.log(saluer(prenom));



// ----------------- Exo 2 ---------------------

function multiplication(nombre1, nombre2) {
    return nombre1 * nombre2;
}

let resultat = multiplication(7, 8);
console.log("Le résulta de 7x8=", resultat)