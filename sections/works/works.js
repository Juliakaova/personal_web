const buttonsLeft = document.querySelectorAll(".left");
const buttonsRight = document.querySelectorAll(".right");
const contents = document.querySelectorAll(".content");
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




