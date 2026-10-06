"use strict";

/* CACHE-BUSTER: 2026-10-06-0818 */
const HM_JS_VERSION = "13.0";


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


/* ==================================================
   VIDEOS COMPLEMENTARIOS POR PÁGINA
   ================================================== */

const videosComplementarios = {

    1: "https://youtu.be/PkNDkUbAATU?si=BG3NB_5aOFggDn3Y",
    2: "https://youtu.be/I95gS70vAPg?si=BnhaDzNyJ397-6Y5",
    3: "https://youtu.be/3TgsyUGaGmo?si=pEEJblCUj0GJcZHQ",
    4: "https://youtu.be/NjUCNCCuooY?si=3Y2THuEscEc50Yrb",
    5: "https://youtu.be/NjUCNCCuooY?si=6tCWzhaVfM_oMrGY",
    6: "https://youtu.be/fCXe7nWPwnI?si=okpMxERks_rMO3aL",
    7: "https://youtu.be/SS5NcxjVFDg?si=AUSJN6uAlNPGoNqX",
    8: "https://youtu.be/3XH0yOdORYQ?si=B9URc73_TJDXAZxj",
    9: "https://youtu.be/jdDYxj2rlzU?si=tW2fi_ssXeQ3wukB"

};


const subtitulosVideos = {

    7: "Cuerpo de la app (HTML/JS y CSS)",
    8: "Ejemplos personales de Promos",
    9: "Estructura para realizar juegos estilo retros."

};


let paginaActual = 1;


function obtenerIdYoutube(url) {

    if (!url) {

        return "";

    }


    const coincidencia =
        url.match(
            /youtu\.be\/([^?&#/]+)|youtube\.com\/watch\?v=([^&#]+)|youtube\.com\/embed\/([^?&#/]+)/i
        );


    if (!coincidencia) {

        return "";

    }


    return (
        coincidencia[1] ||
        coincidencia[2] ||
        coincidencia[3] ||
        ""
    );

}


function resetearVideoComplementario() {

    const botonVideo =
        document.getElementById(
            "botonVideoComplementario"
        );


    const subtitulo =
        document.getElementById(
            "subtituloVideo"
        );


    const contenedorVideo =
        document.getElementById(
            "contenedorVideoComplementario"
        );


    const video =
        document.getElementById(
            "videoComplementario"
        );


    if (!botonVideo || !subtitulo || !contenedorVideo || !video) {

        return;

    }


    video.src = "";

    contenedorVideo.classList.remove("visible");
    contenedorVideo.setAttribute(
        "aria-hidden",
        "true"
    );

    botonVideo.classList.remove("oculto");

    botonVideo.textContent =
        "▶ VER VIDEO";

    subtitulo.textContent =
        subtitulosVideos[paginaActual] ||
        "";

}


function prepararVideoComplementario() {

    const botonVideo =
        document.getElementById(
            "botonVideoComplementario"
        );


    const subtitulo =
        document.getElementById(
            "subtituloVideo"
        );


    if (!botonVideo || !subtitulo) {

        return;

    }


    const urlVideo =
        videosComplementarios[paginaActual];


    if (!urlVideo) {

        botonVideo.classList.add("oculto");
        subtitulo.textContent = "";

        return;

    }


    botonVideo.classList.remove("oculto");

    subtitulo.textContent =
        subtitulosVideos[paginaActual] ||
        "";

}


function alternarVideoComplementario() {

    const botonVideo =
        document.getElementById(
            "botonVideoComplementario"
        );


    const contenedorVideo =
        document.getElementById(
            "contenedorVideoComplementario"
        );


    const video =
        document.getElementById(
            "videoComplementario"
        );


    if (!botonVideo || !contenedorVideo || !video) {

        return;

    }


    const urlVideo =
        videosComplementarios[paginaActual];


    if (!urlVideo) {

        return;

    }


    const videoVisible =
        contenedorVideo.classList.contains(
            "visible"
        );


    if (videoVisible) {

        video.src = "";

        contenedorVideo.classList.remove(
            "visible"
        );

        contenedorVideo.setAttribute(
            "aria-hidden",
            "true"
        );

        botonVideo.textContent =
            "▶ VER VIDEO";

        return;

    }


    const youtubeId =
        obtenerIdYoutube(
            urlVideo
        );


    if (!youtubeId) {

        return;

    }


    video.src =
        "https://www.youtube.com/embed/" +
        encodeURIComponent(
            youtubeId
        ) +
        "?rel=0";


    contenedorVideo.classList.add(
        "visible"
    );

    contenedorVideo.setAttribute(
        "aria-hidden",
        "false"
    );

    botonVideo.textContent =
        "▲ CERRAR VIDEO";


    window.setTimeout(
        function() {

            contenedorVideo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        80
    );

}


function actualizarAccionPagina() {

    const botonAccion =
        document.getElementById(
            "accionPagina"
        );


    if (!botonAccion) {

        return;

    }


    if (paginaActual >= 10) {

        botonAccion.textContent =
            "VOLVER A INTERFAZ";

        return;

    }


    botonAccion.textContent =
        "SIGUIENTE PÁGINA";

}


function cargarPaginaEnVisor(numeroPagina) {

    const visor =
        document.getElementById(
            "paginaVisor"
        );


    const carpeta =
        document.querySelector(
            ".carpeta-visor"
        );


    if (
        !paginas[numeroPagina] ||
        !visor
    ) {

        return;

    }


    paginaActual =
        numeroPagina;


    visor.src =
        paginas[numeroPagina];


    visor.alt =
        "Hoja " +
        numeroPagina +
        " del curso Humanómetro";


    resetearVideoComplementario();

    prepararVideoComplementario();

    actualizarAccionPagina();


    if (carpeta) {

        carpeta.scrollTop =
            0;

    }

}


function abrirPagina(numeroPagina) {

    const modal =
        document.getElementById(
            "modalPdf"
        );


    if (
        !paginas[numeroPagina] ||
        !modal
    ) {

        return;

    }


    cargarPaginaEnVisor(
        numeroPagina
    );


    modal.style.display =
        "flex";


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


function avanzarPagina() {

    if (
        paginaActual >= 10
    ) {

        cerrarModal();

        return;

    }


    cargarPaginaEnVisor(
        paginaActual + 1
    );

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


    const video =
        document.getElementById(
            "videoComplementario"
        );


    const contenedorVideo =
        document.getElementById(
            "contenedorVideoComplementario"
        );


    if (!modal) {

        return;

    }


    modal.style.display =
        "none";


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    if (visor) {

        visor.src =
            "";

    }


    if (video) {

        video.src =
            "";

    }


    if (contenedorVideo) {

        contenedorVideo.classList.remove(
            "visible"
        );

        contenedorVideo.setAttribute(
            "aria-hidden",
            "true"
        );

    }


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
