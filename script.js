"use strict";


/* =========================================
   PÁGINAS INDIVIDUALES DEL CURSO
========================================= */

const paginas = {
    1: "paginas/pagina_1.png",
    2: "paginas/pagina_2.png",
    3: "paginas/pagina_3.png",
    4: "paginas/pagina_4.png",
    5: "paginas/pagina_5.png",
    6: "paginas/pagina_6.png",
    7: "paginas/pagina_7.png",
    8: "paginas/pagina_8.png",
    9: "paginas/pagina_9.png",
    10: "paginas/pagina_10.png"
};


/* =========================================
   ABRIR UNA PÁGINA
========================================= */

function abrirPagina(numeroPagina) {

    const modal =
        document.getElementById("modalPdf");

    const titulo =
        document.getElementById("tituloModal");

    const visor =
        document.getElementById("paginaVisor");

    if (!paginas[numeroPagina]) {
        return;
    }

    titulo.innerText =
        "Curso Humanómetro · Hoja " + numeroPagina;

    visor.src =
        paginas[numeroPagina];

    visor.alt =
        "Hoja " +
        numeroPagina +
        " del curso Humanómetro";

    modal.style.display = "flex";

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    const contenedor =
        document.querySelector(
            ".pagina-visor-container"
        );

    if (contenedor) {
        contenedor.scrollTop = 0;
        contenedor.scrollLeft = 0;
    }
}


/* =========================================
   CERRAR VISOR
========================================= */

function cerrarModal() {

    const modal =
        document.getElementById("modalPdf");

    const visor =
        document.getElementById("paginaVisor");

    modal.style.display = "none";

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    visor.src = "";

    document.body.style.overflow = "";
}


/* =========================================
   CERRAR HACIENDO CLICK FUERA
========================================= */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("modalPdf");

        if (event.target === modal) {
            cerrarModal();
        }

    }
);


/* =========================================
   CERRAR CON ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            cerrarModal();
        }

    }
);


/* =========================================
   PROTECCIÓN BÁSICA DE INTERFAZ
========================================= */

document.addEventListener(
    "contextmenu",
    function(event) {

        event.preventDefault();

    }
);


/* =========================================
   EVITAR ARRASTRE DE IMÁGENES
========================================= */

document.addEventListener(
    "dragstart",
    function(event) {

        if (
            event.target.tagName === "IMG"
        ) {
            event.preventDefault();
        }

    }
);


/* =========================================
   ATAJOS BÁSICOS
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const key =
            event.key.toLowerCase();


        if (
            event.ctrlKey &&
            (
                key === "s" ||
                key === "p" ||
                key === "u" ||
                key === "i"
            )
        ) {

            event.preventDefault();

        }


        if (
            event.ctrlKey &&
            event.shiftKey &&
            (
                key === "i" ||
                key === "j" ||
                key === "c"
            )
        ) {

            event.preventDefault();

        }

    }
);


/* =========================================
   EVITAR ARRASTRE DE IMÁGENES
========================================= */

document
    .querySelectorAll("img")
    .forEach(function(imagen) {

        imagen.setAttribute(
            "draggable",
            "false"
        );

    });
