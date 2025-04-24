const topFingers = document.querySelectorAll(".top");
const bottomFingers = document.querySelectorAll(".bottom");
const shutter= document.querySelector(".shutter");


//I start with this setTimeOut to start the fingers animation, as the interval does not start until 2s and I want it to start in 1s, this way it allows me to visually start the animation earlier
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

//this interval is used to animate the finger top and bottom, this way each add and remove takes one second, repeating the interval every two seconds it will be in continuous movement
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

//I am going to animate the camera button in such a way that it coordinates with the lens animation, in the same way as the finger animation, I make a time interval, but previously a setTimeOut, so that the animation starts when the web is opened
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


//give visibility to the navs, through classes, this way only one of the navs of the landing can be visible, never both at the same time, and also the navs can be closed again by clicking on them
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