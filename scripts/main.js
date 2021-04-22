setup();

function setup() {
    getDog();
}
function getDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => updateDogImgSrc(data.message));
}
function updateDogImgSrc(message) {
    let img = document.querySelector("img");
    img.src = message
}