const buttonDiv = document.createElement("div");
$(buttonDiv).addClass("buttonDiv");
$("body").append(buttonDiv);

const button = document.createElement("div");
$(button).addClass("offButton");
$(button).attr("id", "button")
$(".buttonDiv").append(button);

const circle = document.createElement("div");
$(circle).addClass("circle");
$(".offButton").append(circle);

const sun = document.createElement("div");
$(sun).addClass("sun");
$("body").append(sun);

for (i=0;i<3;i++) {
    const firewood = document.createElement("div");
    $(firewood).addClass("firewood");
    $(".container").append(firewood);
}


const fire = document.createElement("div");
$(fire).addClass("fire");
$(".container").append(fire);


for (let i=0;i<12;i++) {
    const flame = document.createElement("div");
    $(flame).addClass("flame");
    $(".container").append(flame);
}

const glow = document.createElement("div");
$(glow).addClass("glow");
$(".container").append(glow);

const ground = document.createElement("div");
$(ground).addClass("ground");
$("body").append(ground);

function burning() {
    anime({
        targets: ".fire",
        scale: 1.1,
        backgroundColor: ["#FF0000", "#FFA500", "#FFFF00"],
        direction: "alternate",
        easing: "linear",
        duration: 600,
        complete: burning,
    })
}

function animation() {
    anime({
        targets: ".flame:nth-child(5), .flame:nth-child(9), .flame:nth-child(13)",
        opacity: [1, 0.6, 0],
        translateY: [0,() => -25+"vmin"],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1, 1.2, 0],
        translateX: [0,function() {
            return anime.random(-10,10) + "vmin";
        }],
        duration: 750,
        easing: "linear",
        delay: anime.stagger(80),
        complete: animation,
    })
}

function animation2() {
    anime({
        targets: ".flame:nth-child(6), .flame:nth-child(10), .flame:nth-child(11)",
        opacity: [1, 0.6, 0],
        translateY: [0,() => -25+"vmin"],
        translateX: [0,function() {
            return anime.random(-10,10) + "vmin";
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1, 1.2, 0],
        duration: 750,
        easing: "linear",
        delay: anime.stagger(150),
        complete: animation2,
    })
}

function animation3() {
    anime({
        targets: ".flame:nth-child(7), .flame:nth-child(8), .flame:nth-child(12)",
        opacity: [1, 0.6, 0],
        translateY: [0,() => -25+"vmin"],
        translateX: [0,function() {
            return anime.random(-10,10) + "vmin";
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1, 1.2, 0],
        duration: 750,
        easing: "linear",
        delay: anime.stagger(260),
        complete: animation3,
    })
}

function animation4() {
    anime({
        targets: ".flame:nth-child(14), .flame:nth-child(15), .flame:nth-child(16)",
        opacity: [1, 0.6, 0],
        translateY: [0,() => -25+"vmin"],
        translateX: [0,function() {
            return anime.random(-10,10) + "vmin";
        }],
        rotate: [0, function() {
            return anime.random(-360,360);
        }],
        scale: [1, 0],
        duration: 550,
        easing: "linear",
        delay: 1,
        complete: animation4,
    })
}

burning();
animation();
animation2();
animation3();
animation4();

$("<audio></audio").attr({
    "src": "audio/fire.mp3",
    "loop": "loop",
    "id": "sound",
}).appendTo("body");

$("body").on("click", function () {
    $("#sound")[0].play();
})

function setOn() {
    anime({
        targets: ".circle",
        easing: "linear",
        translateX: function () {
            return 6 + "vmin";
        },
        duration: 150,
    });

    $("#button").css("background-color", "#555555");
    $("#button").removeClass("offButton");
    $("#button").addClass("onButton");
    $(".circle").css("background-color", "#777777");
    $("body").css("background-color", "darkblue");
    $(".ground").css("background-color", "darkgreen");
    $(".sun").css("background-color", "#FEFCD7");
    $(".glow").css("display", "block");

    $("#button").off("click",setOn);
    $("#button").on("click",setOff);
}

function setOff() {
    anime({
        targets: ".circle",
        easing: "linear",
        translateX: 0,
        duration: 150,
    });

    $("#button").css("background-color", "white");
    $("#button").removeClass("onButton");
    $("#button").addClass("offButton");
    $(".circle").css("background-color", "white");
    $("body").css("background-color", "lightblue");
    $(".ground").css("background-color", "green");
    $(".sun").css("background-color", "yellow");
    $(".glow").css("display", "none");

    $("#button").off("click",setOff);
    $("#button").on("click",setOn);
}

$("#button").on("click",setOn);

anime({
    targets: ".glow",
    scale: [1.5, 1.6],
    duration: 1000,
    easing: "linear",
    loop: true,
    direction: "alternate"
})