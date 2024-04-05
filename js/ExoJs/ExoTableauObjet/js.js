
let tableau = [1, 2, 3, 4, 5];

for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}

// ------------------------------------------------------


let tableau2 = [];

tableau2.push(10);
tableau2.push(20);
tableau2.push(30);

console.log("Tableau avant suppression:", tableau2);

tableau2.shift();

console.log("Tableau après suppression:", tableau2);


// -----------------Objet -----------------------------------


let personne = {
    nom: "Alice",
    age: 25,
    ville: "Paris"
};

console.log("Nom:", personne.nom);
console.log("Âge:", personne.age);
console.log("Ville:", personne.ville);


// -------------------------------------------------------------------

let compteBancaire = {
    solde: 1000,
    titulaire: "John Doe"
};


console.log("Solde avant modification:", compteBancaire.solde);

// Modification du solde 
compteBancaire.solde += 500;

console.log("Solde après modification:", compteBancaire.solde);

