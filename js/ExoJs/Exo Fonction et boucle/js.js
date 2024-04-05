
// --------- Exo 1 ----------------------------

function Mineur(age) {
    if (age >= 18) {
        console.log("Majeur");
    } else {
        console.log("Mineur");
    }
}

let age = prompt("Entrez l'âge de la personne : ");
Mineur(age);

// --------------- Exo 2 ---------------------------

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// ------------------- Exo 3 --------------------------

const nombre = Math.floor(Math.random() * 100) + 1;

let utlisateur;
let essais = 0;

while (utilisateur == nombre){
    ulitsateur = prompt("Devinez un nombre entre  1 et 100");
    essais++;

    if(utilisateur < nombre){
        alert("Le nombre est plus grand")
    }
    else if (utilisateur > nombre){
        alert("Le nombre est plus petit")
    }
}