const imagesLength = 3;

const choseImage = `${Math.floor(Math.random()*imagesLength)}.jpg`;

const bgImage = document.createElement("img");
bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);