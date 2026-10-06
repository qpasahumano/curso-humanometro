"use strict";

/* CACHE-BUSTER: 2026-10-06-0508 */
const HM_JS_VERSION = "11.1";


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



function abrirPagina(numeroPagina) {


    const modal =
        document.getElementById(
            "modalPdf"
        );


    const visor =
        document.getElementById(
            "paginaVisor"
        );


    const carpeta =
        document.querySelector(
            ".carpeta-visor"
        );


    if (
        !paginas[numeroPagina]
    ) {

        return;

    }


    visor.src =
        paginas[numeroPagina];


    visor.alt =
        "Hoja " +
        numeroPagina +
        " del curso Humanómetro";


    modal.style.display =
        "flex";


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    if (carpeta) {

        carpeta.scrollTop =
            0;

    }

}



function cerrarModal() {


    const modal =
        document.getElementById(
            "modalPdf"
        );


    const visor =
        document.getElementById(
            "paginaVisor"
        );


    modal.style.display =
        "none";


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    visor.src =
        "";


    document.body.style.overflow =
        "";

}



window.addEventListener(
    "click",
    function(event) {


        const modal =
            document.getElementById(
                "modalPdf"
            );


        if (
            event.target === modal
        ) {

            cerrarModal();

        }

    }
);



document.addEventListener(
    "keydown",
    function(event) {


        if (
            event.key === "Escape"
        ) {

            cerrarModal();

        }

    }
);



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
            event.target.tagName === "IMG"
        ) {

            event.preventDefault();

        }

    }
);



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



document
    .querySelectorAll("img")
    .forEach(
        function(imagen) {

            imagen.setAttribute(
                "draggable",
                "false"
            );

        }
    );




/* ==================================================
   CARRUSEL HORIZONTAL DE PÁGINAS
   ================================================== */

const carruselHojas =
    document.getElementById(
        "carruselHojas"
    );


const indicadorDeslizar =
    document.querySelector(
        ".indicador-scroll"
    );


if (
    carruselHojas &&
    indicadorDeslizar
) {

    let carruselYaDesplazado =
        false;


    const ocultarIndicador =
        function() {

            if (
                carruselYaDesplazado
            ) {

                return;

            }

            carruselYaDesplazado =
                true;

            indicadorDeslizar.classList.add(
                "oculto"
            );

        };


    carruselHojas.addEventListener(
        "scroll",
        ocultarIndicador,
        {
            passive: true
        }
    );


    carruselHojas.addEventListener(
        "touchstart",
        function() {

            if (
                carruselHojas.scrollLeft > 2
            ) {

                ocultarIndicador();

            }

        },
        {
            passive: true
        }
    );

}
