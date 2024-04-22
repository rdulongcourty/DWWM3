document.getElementById("Button").addEventListener("click", function(){
    let redRectangle = document.createElement("div");
    redRectangle.classList.add("redRectangle");
    document.body.appendChild(redRectangle);
    redRectangle.addEventListener("click", function() {
        removeRectangle(redRectangle);
    });
    console.log("Rectangle créé rouge");

    setTimeout(function() {
        let blueRectangle = document.createElement("div");
        blueRectangle.classList.add("blueRectangle");
        document.body.appendChild(blueRectangle);
        console.log("Rectangle créé bleu");
        blueRectangle.addEventListener("click", function() {
            removeRectangle(blueRectangle);
        });
    }, 2000); 
});

function removeRectangle(rectangle) {
    rectangle.parentNode.removeChild(rectangle);
    console.log("Rectangle supprimé");
}

