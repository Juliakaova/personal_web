const topFingers = document.querySelectorAll(".top");
const bottomFingers = document.querySelectorAll(".bottom");
const shutter= document.querySelector(".shutter");

// empiezo con este setTimeOut para empezar la animación de los fingers, como el intervalo no comienza hasta los 2s y quiero que empiece en 1s, de esta manera me permite comezar antes a nivel visual la animación
topFingers.forEach((topFinger) => {
    setTimeout(() => {
        topFinger.classList.add("marginTop");
    }, 1000);
});

bottomFingers.forEach((bottomFinger) => {
    setTimeout(() => {
        bottomFinger.classList.add("marginBottom");
    }, 1000);
});

//este intervalo me sirve para animar los finger top y bottom, de esta forma cada add y remove tarda un segundo, al repetirse el intervalo cada dos segundos estará en movimiento continuo
setInterval(() => {
    topFingers.forEach((topFinger) => {
        topFinger.classList.remove("marginTop");
        setTimeout(() => {
            topFinger.classList.add("marginTop");
        }, 1000);
    });

    bottomFingers.forEach((bottomFinger) => {
        bottomFinger.classList.remove("marginBottom");
        setTimeout(() => {
            bottomFinger.classList.add("marginBottom");
        }, 1000);
    });
}, 2000);

//voy a animar el botón de la cámara de tal forma que se coordine con la animación de lens, del mismo modo que la animación de los dedos, hago un intervalo de tiempo, pero anteriormente un setTimeOut, para que la animación comience al abrirse la web
setTimeout(() => {
    shutter.classList.add("click");
}, 0);
setTimeout(()=>{
    shutter.classList.remove("click");
}, 1000);
setInterval(()=>{
    shutter.classList.add("click");
    setTimeout(()=>{
        shutter.classList.remove("click");
    }, 1000);
}, 8000);