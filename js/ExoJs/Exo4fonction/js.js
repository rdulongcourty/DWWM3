function nombreDeJours(num) {
    let nombreDeJours;
    switch (num) {
        case 1:
            nombreDeJours = 31;
            break;
        case 2:
            if (2024%4 ==0) {
                nombreDeJours = 29;
            } else {
                nombreDeJours = 28;
            }
            break;
        case 3:
            nombreDeJours = 31;
            break;
        case 4:
            nombreDeJours = 30;
            break;
        case 5:
            nombreDeJours = 31;
            break;
        case 6:
            nombreDeJours = 30;
            break;
        case 7:
            nombreDeJours = 31;
            break;
        case 8:
            nombreDeJours = 31;
            break;
        case 9:
            nombreDeJours = 30;
            break;
        case 10:
            nombreDeJours = 31;
            break;
        case 11:
            nombreDeJours = 30;
            break;
        case 12:
            nombreDeJours = 31;
            break;
        default:
            nombreDeJours = "mois invalide";
    }

    console.log("nombre de jour : " + nombreDeJours);
}

let annee = new Date(2).getFullYear(2023);

nombreDeJours(2);

