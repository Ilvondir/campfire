const ognisko = document.querySelector('.ognisko');

for (i=0;i<3;i++) {
    const drwa = document.createElement('div');
    drwa.classList.add('drwo');
    ognisko.appendChild(drwa);
}


const ogien = document.createElement('div');
ogien.classList.add('ogien');
ognisko.appendChild(ogien);


const plomien1 = document.createElement('div');
plomien1.classList.add('plomien1');
ognisko.appendChild(plomien1);

const plomien2 = document.createElement('div');
plomien2.classList.add('plomien2');
ognisko.appendChild(plomien2);

const plomien3 = document.createElement('div');
plomien3.classList.add('plomien3');
ognisko.appendChild(plomien3);

const plomien4 = document.createElement('div');
plomien4.classList.add('plomien4');
ognisko.appendChild(plomien4);

const plomien5 = document.createElement('div');
plomien5.classList.add('plomien5');
ognisko.appendChild(plomien5);

const plomien6 = document.createElement('div');
plomien6.classList.add('plomien6');
ognisko.appendChild(plomien6);

const plomien7 = document.createElement('div');
plomien7.classList.add('plomien7');
ognisko.appendChild(plomien7);

const plomien8 = document.createElement('div');
plomien8.classList.add('plomien8');
ognisko.appendChild(plomien8);

const plomien9 = document.createElement('div');
plomien9.classList.add('plomien9');
ognisko.appendChild(plomien9);

const plomien10 = document.createElement('div');
plomien10.classList.add('plomien10');
ognisko.appendChild(plomien10);

const plomien11 = document.createElement('div');
plomien11.classList.add('plomien11');
ognisko.appendChild(plomien11);

const plomien12 = document.createElement('div');
plomien12.classList.add('plomien12');
ognisko.appendChild(plomien12);

function fire() {
    anime({
        targets: '.ogien',
        scale: 1.1,
        direction: 'alternate',
        easing: 'linear',
        duration: 300,
        complete: fire,
    })
}

function animacja() {
    anime({
        targets: '.plomien1, .plomien5, .plomien9',
        opacity: [1,0],
        translateY: [0,-70],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1,0],
        translateX: [0,function() {
            return anime.random(-30,30);
        }],
        duration: 750,
        easing: 'linear',
        delay: anime.stagger(80),
        complete: animacja,
    })
}

function animacja2() {
    anime({
        targets: '.plomien2, .plomien6, .plomien7',
        opacity: [1,0],
        translateY: [0,-70],
        translateX: [0,function() {
            return anime.random(-30,30);
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1,0],
        duration: 750,
        easing: 'linear',
        delay: anime.stagger(150),
        complete: animacja2,
    })
}

function animacja3() {
    anime({
        targets: '.plomien3, .plomien4, .plomien8',
        opacity: [1,0],
        translateY: [0,-70],
        translateX: [0,function() {
            return anime.random(-30,30);
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1,0],
        duration: 750,
        easing: 'linear',
        delay: anime.stagger(260),
        complete: animacja3,
    })
}

function animacja4() {
    anime({
        targets: '.plomien10, .plomien11, .plomien12',
        opacity: [1,0],
        translateY: [0,-70],
        translateX: [0,function() {
            return anime.random(-30,30);
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1,0],
        duration: 550,
        easing: 'linear',
        delay: 1,
        complete: animacja4,
    })
}

fire();
animacja();
animacja2();
animacja3();
animacja4();
