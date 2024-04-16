
// function gestionnaireToucheAppuyée(event) {
//     console.log(event);
// }

// document.addEventListener("keydown", gestionnaireToucheAppuyée);




// function gestionnaireClicRectangle(event) {
//     console.log("ID du rectangle cliqué : ", event.target.id);
// }


// document.querySelectorAll(".rectangle1, .rectangle2, .rectangle3, .rectangle4").forEach(function(rectangle) {
//     rectangle.addEventListener("click", gestionnaireClicRectangle);
// });




// let dernierRectangleClique = null;


// function gestionnaireClicRectangle(event) {

//     let idRectangle = event.target.id;


//     if (dernierRectangleClique !== null) {
//         document.getElementById(dernierRectangleClique).style.backgroundColor = 'blue';
//     }


//     document.getElementById(idRectangle).style.backgroundColor = 'red';


//     dernierRectangleClique = idRectangle;
// }


// document.querySelectorAll(".rectangle1, .rectangle2, .rectangle3, .rectangle4").forEach(function(rectangle) {
//     rectangle.addEventListener("click", gestionnaireClicRectangle);
// });




// let rectangle = document.getElementById("rectangle");
// let conteneur = document.getElementById("container");

// function gestionnaireMouvementSouris(event) {
//     let rect = conteneur.getBoundingClientRect();
//     let x = event.clientX ;
//     let y = event.clientY;
//     console.log("Position de la souris : " + x + ", " + y);
// }
// rectangle.addEventListener("mousemove", gestionnaireMouvementSouris);


document.getElementById('ouvrirCarre').addEventListener('click', function() {
    let carre = document.getElementById('carre');
    let cercle = document.createElement('div');
    cercle.id = 'cercle';
    carre.appendChild(cercle);
    carre.style.display = 'block';

    carre.addEventListener('mousemove', function(event) {
        let cercle = document.getElementById('cercle');
        cercle.style.left = (event.clientX - 10) + 'px';
        cercle.style.top = (event.clientY - 10) + 'px';
        cercle.style.display = 'block';
    });
});
