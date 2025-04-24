const buttonsLeft = document.querySelectorAll(".carousel>.left");/* this selector selects the children of the class .carousel, who have class .left*/
const buttonsRight = document.querySelectorAll(".carousel>.right");
const contents = document.querySelectorAll(".carousel>.content");
let increment = window.innerWidth / 2;

window.addEventListener("resize", () => { /*to recalculate the increment if the width of the viewport changes/**/
    increment = window.innerWidth / 2;
});

contents.forEach((content, i) => {/* each right and left button is associated to a content div, that's why they share index, and each button will do its function in its corresponding content div */
    buttonsRight[i].addEventListener("click", () => {
        content.scrollBy({
            left: increment,
            behavior: "smooth"
        });
    });
});

contents.forEach((content, i) => {
    buttonsLeft[i].addEventListener("click", () => {
        content.scrollBy({
            left: -increment,
            behavior: "smooth"
        });
    });
});
const nav3D = document.getElementsByClassName("nav3D");
const nav2D = document.getElementsByClassName("nav2D");
const navAbout = document.getElementsByClassName("navAbout");
const options = {//defines the threshold that I will apply as reference to the IntersectionObserver api, so that it is executed according to the indicated visible percentage of the element. As I want that two elements are not shaded at the same time, and that there is always one shaded I give him the value 0.51
    threshold: 0.51
}

const observer2D = new IntersectionObserver((entries) => {// listens to the visibility of an item 

    entries.forEach(entry => {
        //  check if the element is visible
        if (entry.isIntersecting) {
            // If it is visible, we add the class to the element we want to modify and remove it from the others
            nav2D[0].classList.add('here');
            nav3D[0].classList.remove("here");
            navAbout[0].classList.remove("here");
        }
    });
}, options);

//create an array with the two 2D sections so that I can loop and both are observed, resulting in the same action (adding the class to 2D)
const portraits = document.getElementById("portraits");
const documentary = document.getElementById("documentary");
const illustration = document.getElementById("illustration");
const array2D = [portraits, documentary, illustration]

array2D.forEach(element2d => {
    observer2D.observe(element2d);
});

const observer3D = new IntersectionObserver((entries) => {// other observer for 3D sections
   
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav3D[0].classList.add('here');
            nav2D[0].classList.remove("here");
            navAbout[0].classList.remove("here");
        }
    });
}, options);

const jewelry = document.getElementById("jewelry");
const textile = document.getElementById("textile");
const array3D = [jewelry, textile]

array3D.forEach(element3d => {
    observer3D.observe(element3d);
});

const observerAbout = new IntersectionObserver((entries) => {//other observer for About
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navAbout[0].classList.add('here');
            nav2D[0].classList.remove("here");
            nav3D[0].classList.remove("here");
        }
    });
}, options);

const about= document.getElementById("aboutSection");
observerAbout.observe(about);// In this case an Array isn´t necessary 

//Add a class so that when a photo is clicked on it will be displayed bigger

const imgs= document.querySelectorAll(".content>img");
const galery = document.querySelector(".galery");
const imgModal = document.querySelector(".imgModal")
let actualImg = 0;//will subsequently be given a value


imgs.forEach((img, i) => {
    img.addEventListener("click", () => {
        actualImg = i;
        imgModal.setAttribute("src", img.getAttribute("src"));/*takes the attribute of the clicked image and attaches it to the image in the galery section*/
        galery.classList.add("modal");
        galery.classList.remove("hidden");
    });
});

//Close galery secction
galery.addEventListener("click", () => {
    galery.classList.remove("modal");
    galery.classList.add("hidden");
});
