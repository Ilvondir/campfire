for (i=0;i<3;i++) {
    const firewood = document.createElement('div');
    $(firewood).addClass('firewood');
    $(".container").append(firewood);
}


const fire = document.createElement('div');
$(fire).addClass('fire');
$(".container").append(fire);


for (let i=0;i<12;i++) {
    const flame = document.createElement('div');

    let name = "flame" + (i+1);

    $(flame).addClass(name);
    $(".container").append(flame);
}

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
