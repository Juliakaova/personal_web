const buttonsLeft = document.querySelectorAll(".carousel>.left");/* este selector selecciona los hijos de la clase . carousel, que tengan la clase .left*/
const buttonsRight = document.querySelectorAll(".carousel>.right");
const contents = document.querySelectorAll(".carousel>.content");
let increment = window.innerWidth / 2;

window.addEventListener("resize", () => { /*para que recalcule el increment si cambia el ancho del viewport/**/
    increment = window.innerWidth / 2;
});

contents.forEach((content, i) => {/* cada boton right y left está asociado a un div content, por eso comparten indice, y cada button hará su función en su div content correspondiente */
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
const options = {//define el umbral que aplicaré de referencia a la api IntersectionObserver, para que se ejecute en función del porcentaje indicado visible del elemento
    threshold: 0.7
}

const observer2D = new IntersectionObserver((entries) => {// escucha la visibilidad del elemento que le indico en pantalla

    entries.forEach(entry => {
        // Comprobamos si el elemento está visible
        if (entry.isIntersecting) {
            // Si está visible, añadimos la clase al elemento que queremos modificar
            nav2D[0].classList.add('here');
            nav3D[0].classList.remove("here");
            navAbout[0].classList.remove("here");
        }
    });
}, options);

//creo un array con lasdos secciones de 2D para poder hacer un bucle y que así amboas sean observadas, dando lugar a la misma acción (añadir la clase a 2D)
const portraits = document.getElementById("portraits");
const documentary = document.getElementById("documentary");
const illustration = document.getElementById("illustration");
const array2D = [portraits, documentary, illustration]

array2D.forEach(element2d => {
    observer2D.observe(element2d);
});

const observer3D = new IntersectionObserver((entries) => {// escucha la visibilidad del elemento que le indico en pantalla
   
    entries.forEach(entry => {
        // Comprobamos si el elemento está visible
        if (entry.isIntersecting) {
            // Si está visible, añadimos la clase al elemento que queremos modificar
            nav3D[0].classList.add('here');
            nav2D[0].classList.remove("here");
            navAbout[0].classList.remove("here");
        }
    });
}, options);
//creo un array con lasdos secciones de 3D para poder hacer un bucle y que así amboas sean observadas, dando lugar a la misma acción (añadir la clase a 3D)
const jewelry = document.getElementById("jewelry");
const textile = document.getElementById("textile");
const array3D = [jewelry, textile]

array3D.forEach(element3d => {
    observer3D.observe(element3d);
});

const observerAbout = new IntersectionObserver((entries) => {// escucha la visibilidad del elemento que le indico en pantalla
    
    entries.forEach(entry => {
        // Comprobamos si el elemento está visible
        if (entry.isIntersecting) {
            // Si está visible, añadimos la clase al elemento que queremos modificar
            navAbout[0].classList.add('here');
            nav2D[0].classList.remove("here");
            nav3D[0].classList.remove("here");
        }
    });
}, options);

const about= document.getElementById("aboutSection");
observerAbout.observe(about);

//Añadir una clase para que cuando se haga click en una foto se muestre esa foto en grande

const imgs= document.querySelectorAll(".content>img");
const galery = document.querySelector(".galery");
const imgModal = document.querySelector(".imgModal")
let actualImg = 0;//posteriormente se le dará valor


imgs.forEach((img, i) => {
    img.addEventListener("click", () => {
        actualImg = i;
        imgModal.setAttribute("src", img.getAttribute("src"));//coge el atributo de la imagen clickada y se lo pone a la imagen de la sección galery
        galery.classList.add("modal");
        galery.classList.remove("hidden");
    });
});
//Cerrar la sección galery cuando esté abierta

galery.addEventListener("click", () => {
    galery.classList.remove("modal");
    galery.classList.add("hidden");
});
