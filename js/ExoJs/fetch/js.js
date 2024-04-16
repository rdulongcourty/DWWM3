// fetch("https://pokeapi.co/api/v2/")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })

fetch("https://rocket-league1.p.rapidapi.com/ranks/930226ec26174a988dff84898ee13ded", {
    method: 'GET',
    headers: {
        'User-Agent': 'RapidAPI Playground',
        'Accept-Encoding': 'asdoda',
        'X-RapidAPI-Key': '859d1900e8msha6b411dedcd7856p130bfbjsn69e4a923a82c',
        'X-RapidAPI-Host': 'rocket-league1.p.rapidapi.com'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})