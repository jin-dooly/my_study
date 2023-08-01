const imagesLength = 3;

const choseImage = `${Math.floor(Math.random()*imagesLength)}.jpg`;
document.body.style.backgroundImage = `url(img/${choseImage})`;