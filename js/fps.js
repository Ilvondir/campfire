//Pobranie body jako stałej
const ekr = document.querySelector('body');


//Stworzenie div'a, który zostanie użyty do licznika
const licznik = document.createElement('div');
licznik.setAttribute('id', 'licznik');
ekr.appendChild(licznik);


//Ostylowanie div'a z użyciem media querries
var x = window.matchMedia("(orientation: landscape)");

function media() {
    
if (x.matches) {
    licznik.style = "display: flex; justify-content: center; align-items: center; position: fixed; top: 1vw; left: 1vw; background-color: black; font-size: 2vw; color: white; border-radius: 3vw; font-family: none; text-decoration: none; font-weight: regular; font-style: none; z-index: 9999";
}
else {
    licznik.style = "display: flex; justify-content: center; align-items: center; position: fixed; top: 2vw; left: 2vw; background-color: black; font-size: 4vw; color: white; border-radius: 5vw; font-family: none; text-decoration: none; font-weight: regular; font-style: none; z-index: 9999";
}
}

media();
x.addListener(media);


//Funkcja licząca i wyświetlająca klatki
var start = Date.now();
var fps = 0;
function mq() {

if (x.matches) {
function zliczenie () {
    var okres = Date.now();
    fps++;
    if (okres-start > 1000) {
        licznik.innerHTML = "<div style='padding: 0.5vw'>" + (fps / ((okres-start) / 1000)).toFixed(1) + " FPS</div>";
        start = okres;
        fps = 0;
    }
    window.requestAnimationFrame(zliczenie);
}
zliczenie();
}
else {
    function zliczenie () {
    var okres = Date.now();
    fps++;
    if (okres-start > 1000) {
        licznik.innerHTML = "<div style='padding: 1.2vw'>" + (fps / ((okres-start) / 1000)).toFixed(1) + " FPS</div>";
        start = okres;
        fps = 0;
    }
    window.requestAnimationFrame(zliczenie);
}
zliczenie();
}
}

mq();