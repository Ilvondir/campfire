const ognisko = document.querySelector('.container');

for (i=0;i<3;i++) {
    const firewood = document.createElement('div');
    firewood.classList.add('firewood');
    ognisko.appendChild(firewood);
}


const fire = document.createElement('div');
fire.classList.add('fire');
ognisko.appendChild(fire);


const flame1 = document.createElement('div');
flame1.classList.add('flame1');
ognisko.appendChild(flame1);

const flame2 = document.createElement('div');
flame2.classList.add('flame2');
ognisko.appendChild(flame2);

const flame3 = document.createElement('div');
flame3.classList.add('flame3');
ognisko.appendChild(flame3);

const flame4 = document.createElement('div');
flame4.classList.add('flame4');
ognisko.appendChild(flame4);

const flame5 = document.createElement('div');
flame5.classList.add('flame5');
ognisko.appendChild(flame5);

const flame6 = document.createElement('div');
flame6.classList.add('flame6');
ognisko.appendChild(flame6);

const flame7 = document.createElement('div');
flame7.classList.add('flame7');
ognisko.appendChild(flame7);

const flame8 = document.createElement('div');
flame8.classList.add('flame8');
ognisko.appendChild(flame8);

const flame9 = document.createElement('div');
flame9.classList.add('flame9');
ognisko.appendChild(flame9);

const flame10 = document.createElement('div');
flame10.classList.add('flame10');
ognisko.appendChild(flame10);

const flame11 = document.createElement('div');
flame11.classList.add('flame11');
ognisko.appendChild(flame11);

const flame12 = document.createElement('div');
flame12.classList.add('flame12');
ognisko.appendChild(flame12);

function burning() {
    anime({
        targets: '.fire',
        scale: 1.1,
        direction: 'alternate',
        easing: 'linear',
        duration: 300,
        complete: burning,
    })
}

function animation() {
    anime({
        targets: '.flame1, .flame5, .flame9',
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
        complete: animation,
    })
}

function animation2() {
    anime({
        targets: '.flame2, .flame6, .flame7',
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
        complete: animation2,
    })
}

function animation3() {
    anime({
        targets: '.flame3, .flame4, .flame8',
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
        complete: animation3,
    })
}

function animation4() {
    anime({
        targets: '.flame10, .flame11, .flame12',
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
        complete: animation4,
    })
}

burning();
animation();
animation2();
animation3();
animation4();
