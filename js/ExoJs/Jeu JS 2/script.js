document.getElementById("btnTuto").addEventListener("click", function() {
    let modal = document.getElementById('tutoModal');
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.opacity = "1"; // Change l'opacité à 1 après un court délai pour activer la transition
        modal.querySelector('.modal-content').style.transform = "translate(-50%, -50%) rotateX(0)"; // Change la transformation pour faire sortir le modal
    }, 5);
});

document.querySelector('.close').addEventListener("click", function() {
    let modal = document.getElementById('tutoModal');
    modal.style.opacity = "0"; // Change l'opacité à 0 pour cacher le modal avec transition
    modal.querySelector('.modal-content').style.transform = "translate(-50%, -50%) rotateX(90deg)"; // Change la transformation pour renvoyer le modal au fond
    setTimeout(function() {
        modal.style.display = "none";
    }, 100); // Après la durée de la transition
});
