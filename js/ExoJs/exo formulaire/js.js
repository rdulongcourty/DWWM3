let btn = document.getElementById("contactForm")
    .addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let telephone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    

    let form = {
        nom: nom,
        prenom: prenom,
        telephone: telephone,
        message: message
    };
    

    console.log(form);
});