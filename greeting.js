const form = document.querySelector(".js-form");
const input = form.querySelector("input");
//querySelector은 찾은 하나의 요소만 가져옴
//querySelectorAll은 찾은 모든 것을 array로 반환
const greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
        SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
        
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}! 😎`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    
    if(currentUser == null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    console.log("ini");
    loadName();
}

init();