const COORDS = 'coords';
const API_KEY = "2f7877b2dcc4c5747b694a62236469c1";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon) { 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        const temp = json.main.temp;
        const place = json.name;

        weather.innerText = `${temp}°C @${place}`
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordsObj = {
        lat,
        lon
    };
    
    saveCoords(coordsObj);
    getWeather(lat, lon);
}

function handleGeoError() {
    console.log('Can\'t access GEO!');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords =JSON.parse(loadedCoords);
        getWeather(parseCoords.lat, parseCoords.lon);
    }
}

function init() {
    loadCoords();
}

init();