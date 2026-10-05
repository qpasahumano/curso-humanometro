"use strict";


/* =========================================
   PÁGINAS INDIVIDUALES DEL CURSO

   IMPORTANTE:
   Las imágenes están en la raíz del
   repositorio, no dentro de /paginas/.
========================================= */

const paginas = {
    1: "pagina_1.png",
    2: "pagina_2.png",
    3: "pagina_3.png",
    4: "pagina_4.png",
    5: "pagina_5.png",
    6: "pagina_6.png",
    7: "pagina_7.png",
    8: "pagina_8.png",
    9: "pagina_9.png",
    10: "pagina_10.png"
};


/* =========================================
   ABRIR UNA SOLA HOJA
========================================= */

function abrirPagina(numeroPagina) {

    const modal = document.getElementById("modalPdf");
    const titulo = document.getElementById("tituloModal");
    const visor = document.getElementById("paginaVisor");

    if (!paginas[numeroPagina]) {
        return;
    }

    titulo.innerText =
        "CURSO HUMANÓMETRO · HOJA " + numeroPagina;

    visor.src = paginas[numeroPagina];

    visor.alt =
        "Hoja " + numeroPagina + " del curso Humanómetro";

    modal.style.display = "flex";

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
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
   CERRAR AL TOCAR FUERA
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
   PROTECCIÓN BÁSICA DEL CONTENIDO
========================================= */

document.addEventListener(
    "contextmenu",
    function(event) {

        event.preventDefault();

    }
);


document.addEventListener(
    "dragstart",
    function(event) {

        if (
            event.target &&
            event.target.tagName === "IMG"
        ) {

            event.preventDefault();

        }

    }
);


/* =========================================
   BLOQUEAR ATAJOS HABITUALES
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


        if (
            event.ctrlKey &&
            event.key === "PrintScreen"
        ) {

            event.preventDefault();

        }

    }
);


/* =========================================
   DESACTIVAR ARRASTRE DE IMÁGENES
========================================= */

document
    .querySelectorAll("img")
    .forEach(function(imagen) {

        imagen.setAttribute(
            "draggable",
            "false"
        );

    });


/* =========================================
   BLOQUEO COMERCIAL

   TODAVÍA NO SE ACTIVA.

   Primero se prueba:
   - las 10 hojas
   - miniaturas
   - visor individual
   - scroll vertical
   - computadora retro
   - videos

   El desbloqueo por pago se incorpora
   después de aprobar toda la interfaz.
========================================= */
