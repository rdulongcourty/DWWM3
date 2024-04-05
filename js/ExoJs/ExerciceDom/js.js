let button = document.getElementById("button")

let Paragraph = document.getElementById("Paragraph")

button.addEventListener("click", function () {
    Paragraph.textContent = "Hello World !"
})


// ----------- Exo 2 ----------------------

    let button2 = document.getElementById("Button2");
    let paragraph = document.getElementById("Paragraph2");
    console.log(button2);
    button2.addEventListener("click",()=> {
        paragraph.style.color = "red";
    });

// ------------------ Exo 3 -----------------------

    let numeroElement = 4
    document.getElementById("Button3").addEventListener("click", function() {
        let ul = document.getElementById("Liste");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("Element" + numeroElement));
        ul.appendChild(li);
        numeroElement++;
    });

    // ---------------------- Exo 4 ---------------------------

    let bouton4 = document.getElementById('Button4');
    let liste = document.getElementById('Liste2');
    
    bouton4.addEventListener('click', function() {
        // Vérifier s'il y a un enfant à supprimer
        if (liste.children.length > 0) {
            liste.removeChild(liste.children[0]);
        } else {
            console.log("La liste est vide !");
        }
    });

    // ---------------------- Exo 5 -------------------------

    let boutons = document.querySelectorAll('button');

    boutons.forEach(bouton => {
        bouton.addEventListener('click', function() {
        console.log("Vous avez cliqué sur le bouton :", bouton.id);
        });
    });