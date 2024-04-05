
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    console.log(burger, menu);
    burger.addEventListener('click', function () {
        menu.classList.toggle('active');
    });