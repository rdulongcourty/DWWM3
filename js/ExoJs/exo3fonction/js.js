const nombre = Math.floor(Math.random() * 100) + 1;

let utilisateur;
let essais = 0;

while (utilisateur !== nombre) {
    utilisateur =(prompt("Devinez un nombre entre 1 et 100"));
    essais++;

    if (utilisateur < nombre) {
        console.log("Le nombre est plus grand");
    } else if (utilisateur > nombre) {
        console.log("Le nombre est plus petit");
    }
};

console.log("Bravo ! Vous avez deviné le nombre" + essais + "essais.");
