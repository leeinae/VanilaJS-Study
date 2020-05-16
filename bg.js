const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad() {
    console.log("finish"); 
}

function paintImage(imageNum) {
    const image = new Image();
    image.src = `Images/image(${imageNum + 1}).jpg`
    image.classList.add("bgImg");
    body.appendChild(image);
    // image.addEventListener("loaded", handleImgLoad);
}

function getRandom() {
    const number = Math.floor(Math.random() * 6);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();