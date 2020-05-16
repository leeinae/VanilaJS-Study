const body = document.querySelector("#slider");
const IMG_COUNT = 6;
const SHOWING = "bg-showing";
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

function slide(event) {
    const id = event.target.id;
    const firstSlide = document.querySelector(".bgImg:first-child");
    const lastSlide = document.querySelector(".bgImg:last-child");
    const currentSlide = document.querySelector(`.${SHOWING}`);

    if(currentSlide) {
        currentSlide.classList.remove(SHOWING);
        
        if(id == 'next') {
            const nextSlide = currentSlide.nextElementSibling ? currentSlide.nextElementSibling : firstSlide;
            nextSlide.classList.add(SHOWING);
        } else {
            const prevSlide = currentSlide.previousElementSibling ? currentSlide.previousElementSibling : lastSlide;
            prevSlide.classList.add(SHOWING);
        }
    } else {
        firstSlide.classList.add(SHOWING);
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
    nextBtn.addEventListener('click', slide);
    prevBtn.addEventListener('click', slide);
}

init();