let theJoke = document.querySelector('.js-btn');
let jokePlace = document.querySelector('.js-thejoke');

function getAjoke(event) {
    let apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist';
    fetch(apiUrl).then(convertToJson).then(displayJoke);
}

function convertToJson(data) {
    return data.json();
}

function displayJoke(randomjoke) {
    // console.log(randomjoke)
    let htmlJoke = `<div class="joke-box"><p>${randomjoke.joke}</p></div>`;
    let htmlLongJoke = `<div class="joke-box"><p>${randomjoke.setup}</p><p>${randomjoke.delivery}</p></div>`;
    if (randomjoke.joke == undefined)
        jokePlace.innerHTML = htmlLongJoke;
    if (randomjoke.setup == undefined)
        jokePlace.innerHTML = htmlJoke;
    theJoke.innerHTML = 'Get another joke'
}

theJoke.addEventListener('click', getAjoke)
