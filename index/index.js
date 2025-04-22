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
}, 6000);


//dar visibilidad a los navs, a traves de clases, de esta manera solo puede estar visible uno de los navs del landing, nunca los dos a la vez y además pueden cerrarse de nuevo los navs haciendo click
const dosD = document.querySelector(".camera");
const navs = document.querySelectorAll("nav");
const tresD = document.querySelector(".hands");


dosD.addEventListener("click", () => {
    navs[0].classList.add("options2D");
    navs[1].classList.remove("options3D");
});

tresD.addEventListener("click", () => {
    navs[1].classList.add("options3D");
    navs[0].classList.remove("options2D");
});

navs.forEach((nav)=>{
    nav.addEventListener("click", () => {
        nav.className="";
    });
});