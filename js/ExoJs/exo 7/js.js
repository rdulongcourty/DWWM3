const data = {
    "id": "0001",
    "type": "gateau",
    "nom": "donuts",
    "price": 0.55,
    "nappages": {
        "nappage": [
            { "id": "1001", "type": "Chocolat" },
            { "id": "1002", "type": "Fraise" },
            { "id": "1003", "type": "Framboise" },
            { "id": "1004", "type": "Vanille" }
        ]
    },
    "topping": [
        { "id": "5001", "type": "Sans Topping" },
        { "id": "5002", "type": "Perles de sucre" },
        { "id": "5003", "type": "Copos de coco" },
        { "id": "5004", "type": "Billes de chocolat" },
        { "id": "5005", "type": "Vermisselles de chocolat" },
    ]
};

// Création de la carte
const card = document.createElement('div');
card.classList.add('card');
card.style.backgroundColor = 'red';
card.style.width = '300px';
card.style.height = '200px';
card.style.alignItems = 'center'
card.style.alignContent = 'center'

const titre = document.createElement('h1');
titre.textContent = data.type + ' ' + data.nom;
card.appendChild(titre);

const priceP = document.createElement('p');
priceP.textContent = 'Prix : '+ data.price + '€';
card.appendChild(priceP);

const nappaP = document.createElement('p');
let nappaT = "Nappage possible : ";
data.nappages.nappage.forEach(nappage => {
    nappaT += nappage.type + (' ');
});
nappaP.textContent = nappaT.slice(0, -1);
card.appendChild(nappaP);

document.body.appendChild(card);

// Création du form pour nappage

const form = document.createElement('form');
form.style.display = 'flex'
form.style.marginTop = '2%'

const nappaC = document.createElement('div')
nappaC.style.border = '1px solid black'
nappaC.style.padding = '10px'
nappaC.style.marginRight = '20px'



const nappaH = document.createElement('h3');
nappaH.textContent = 'Nappage possible : ';
nappaC.appendChild(nappaH);

data.nappages.nappage.forEach(nappage => {
    const nappaI = document.createElement('input');
    nappaI.type = 'radio';
    nappaI.name = 'nappage';
    nappaI.value = nappage.type;
    
    const nappaL = document.createElement('label');
    nappaL.textContent = nappage.type;

    nappaC.appendChild(nappaI)
    nappaC.appendChild(nappaL)
    nappaC.appendChild(document.createElement('br'))
});

form.appendChild(nappaC)
// Création du form pour topping 

const toppingC = document.createElement('div')
toppingC.style.border = '1px solid black'
toppingC.style.padding = '10px'
toppingC.style.marginRight = '20px'

const toppingH = document.createElement('h3');
toppingH.textContent = 'Topping possible : ';
toppingC.appendChild(toppingH)

data.topping.forEach(topping => {
    const toppingI = document.createElement('input');
    toppingI.type = 'radio';
    toppingI.name = 'topping';
    toppingI.value = topping.type;

    const toppingL = document.createElement('label');
    toppingL.textContent = topping.type;

    toppingC.appendChild(toppingI)
    toppingC.appendChild(toppingL)
    toppingC.appendChild(document.createElement('br'))

});

form.appendChild(toppingC)

// Création du bouton

const sendBtn = document.createElement('button');
sendBtn.type = 'button';
sendBtn.textContent = 'Valider';

sendBtn.addEventListener('click', () => {
    const selectN = document.querySelector('input[name="nappage"]:checked');
    const selectT = document.querySelector('input[name="topping"]:checked');
    const selectH = document.createElement('h2');

    if (selectN && selectT) {
        selectH.textContent = `Nappage : ${selectN.value}, Topping : ${selectT.value}`;
    } 
    else {
        selectH.textContent = 'Veuillez sélectionner un nappage et un topping.';
    }

    document.body.appendChild(selectH);
});

form.appendChild(sendBtn);
document.body.appendChild(form);
