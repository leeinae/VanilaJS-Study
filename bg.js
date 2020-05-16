const body = document.querySelector("#silder");
const IMG_COUNT = 6;
const SHOWING = "bg-showing";

function silde() {
    const firstSilde = document.querySelector(".bgImg:first-child");
    const currentSilde = document.querySelector(`.${SHOWING}`);

    if(currentSilde) {
        currentSilde.classList.remove(SHOWING);
        const nextSilde = currentSilde.nextElementSibling;

        if(nextSilde) {
            nextSilde.classList.add(SHOWING);
        } else {
            firstSilde.classList.add(SHOWING);
        }
    } else {
        firstSilde.classList.add(SHOWING);
    }
}

function paintImage() {
    for(var i=1; i<=IMG_COUNT; i++){
        const image = new Image();
        
        image.src = `Images/image(${i}).jpg`
        image.classList.add("bgImg");
        if(i==1) {
            image.classList.add("bg-showing");
        }
        body.appendChild(image);
    }
}

function init() {
    paintImage();
}

init();
setInterval(silde, 5000);