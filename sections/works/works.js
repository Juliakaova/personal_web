const buttonsLeft = document.querySelectorAll(".carousel>.left");/* este selector selecciona los hijos de la clase . carousel, que tengan la clase .left*/
const buttonsRight = document.querySelectorAll(".carousel>.right");
const contents = document.querySelectorAll(".carousel>.content");
let increment = window.innerWidth / 2;
console.log(increment)

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

const portraits = document.getElementById("portraits");
const documentary = document.getElementById("documentary");
const illustration = document.getElementById("illustration");
const array2D = [portraits, documentary, illustration]

array2D.forEach(element2d => {
    observer2D.observe(element2d);
});

const observer3D = new IntersectionObserver((entries) => {// escucha la visibilidad del elemento que le indico en pantalla
    console.log("hola")
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
const jewelry = document.getElementById("jewelry");
const textile = document.getElementById("textile");
const array3D = [jewelry, textile]

array3D.forEach(element3d => {
    observer3D.observe(element3d);
});

const observerAbout = new IntersectionObserver((entries) => {// escucha la visibilidad del elemento que le indico en pantalla
    console.log("hola")
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

/*
const observer = new IntersectionObserver((entries) => {// escucha la visibilidad del elemento que le indico en pantalla
    
    entries.forEach(entry => {
      // Comprobamos si el elemento está visible
      if (entry.isIntersecting) {
        // Si está visible, añadimos la clase al elemento que queremos modificar
        nav2D[0].classList.add('here');
      } else {
        // Si no está visible, quitamos la clase
       nav2D[0].classList.remove('here');
      }
    });
  },options);


const portraits= document.getElementById("portraits");
observer.observe(portraits);*/
