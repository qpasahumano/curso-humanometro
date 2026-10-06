"use strict";

/* CACHE-BUSTER: 2026-10-06-0836 */
const HM_JS_VERSION = "14.0";


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
   VIDEOS COMPLEMENTARIOS
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



/* ==================================================
   TIMBRE SUTIL DE RECREO
   ================================================== */

let timbreIntentado =
    false;


let timbreProgramado =
    false;


let audioContext =
    null;


function reproducirTimbreRecreo() {

    if (
        timbreIntentado
    ) {

        return;

    }


    timbreIntentado =
        true;


    try {

        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;


        if (
            !AudioContextClass
        ) {

            return;

        }


        if (!audioContext) {

            audioContext =
                new AudioContextClass();

        }


        const iniciarTimbre =
            function() {

                if (
                    !audioContext
                ) {

                    return;

                }


                const ahora =
                    audioContext.currentTime;


                const gananciaPrincipal =
                    audioContext.createGain();


                gananciaPrincipal.gain.setValueAtTime(
                    0.0001,
                    ahora
                );


                gananciaPrincipal.gain.exponentialRampToValueAtTime(
                    0.075,
                    ahora + 0.025
                );


                gananciaPrincipal.gain.exponentialRampToValueAtTime(
                    0.0001,
                    ahora + 1.15
                );


                gananciaPrincipal.connect(
                    audioContext.destination
                );


                const frecuencias = [
                    784,
                    988,
                    1319
                ];


                frecuencias.forEach(
                    function(frecuencia, indice) {

                        const oscilador =
                            audioContext.createOscillator();


                        const ganancia =
                            audioContext.createGain();


                        oscilador.type =
                            "triangle";


                        oscilador.frequency.setValueAtTime(
                            frecuencia,
                            ahora
                        );


                        ganancia.gain.setValueAtTime(
                            0.0001,
                            ahora
                        );


                        ganancia.gain.exponentialRampToValueAtTime(
                            0.24 / (indice + 1),
                            ahora + 0.018
                        );


                        ganancia.gain.exponentialRampToValueAtTime(
                            0.0001,
                            ahora + 1.05
                        );


                        oscilador.connect(
                            ganancia
                        );


                        ganancia.connect(
                            gananciaPrincipal
                        );


                        oscilador.start(
                            ahora
                        );


                        oscilador.stop(
                            ahora + 1.12
                        );

                    }
                );


                window.setTimeout(
                    function() {

                        if (
                            !audioContext
                        ) {

                            return;

                        }


                        const segundoToque =
                            audioContext.currentTime;


                        const gananciaSegundo =
                            audioContext.createGain();


                        gananciaSegundo.gain.setValueAtTime(
                            0.0001,
                            segundoToque
                        );


                        gananciaSegundo.gain.exponentialRampToValueAtTime(
                            0.055,
                            segundoToque + 0.02
                        );


                        gananciaSegundo.gain.exponentialRampToValueAtTime(
                            0.0001,
                            segundoToque + 0.85
                        );


                        gananciaSegundo.connect(
                            audioContext.destination
                        );


                        const osciladorSegundo =
                            audioContext.createOscillator();


                        osciladorSegundo.type =
                            "triangle";


                        osciladorSegundo.frequency.setValueAtTime(
                            1047,
                            segundoToque
                        );


                        osciladorSegundo.connect(
                            gananciaSegundo
                        );


                        osciladorSegundo.start(
                            segundoToque
                        );


                        osciladorSegundo.stop(
                            segundoToque + 0.82
                        );

                    },
                    480
                );

            };


        const resultado =
            audioContext.resume();


        if (
            resultado &&
            typeof resultado.then === "function"
        ) {

            resultado
                .then(
                    iniciarTimbre
                )
                .catch(
                    function() {

                        /* El navegador puede bloquear
                           el audio automático. No rompe
                           la interfaz. */

                    }
                );

        } else {

            iniciarTimbre();

        }

    } catch (error) {

        /* El sonido nunca debe impedir
           el funcionamiento de la página. */

    }

}


function programarTimbreRecreo() {

    if (
        timbreProgramado
    ) {

        return;

    }


    timbreProgramado =
        true;


    window.setTimeout(
        function() {

            reproducirTimbreRecreo();

        },
        4500
    );

}


function desbloquearTimbreConInteraccion() {

    if (
        timbreIntentado
    ) {

        return;

    }


    reproducirTimbreRecreo();

}



/* ==================================================
   YOUTUBE
   ================================================== */

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



/* ==================================================
   VIDEO COMPLEMENTARIO
   ================================================== */

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


    if (
        !botonVideo ||
        !subtitulo ||
        !contenedorVideo ||
        !video
    ) {

        return;

    }


    video.src =
        "";

    contenedorVideo.classList.remove(
        "visible"
    );

    contenedorVideo.setAttribute(
        "aria-hidden",
        "true"
    );

    botonVideo.classList.remove(
        "oculto"
    );

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


    if (
        !botonVideo ||
        !subtitulo
    ) {

        return;

    }


    const urlVideo =
        videosComplementarios[paginaActual];


    if (!urlVideo) {

        botonVideo.classList.add(
            "oculto"
        );

        subtitulo.textContent =
            "";

        return;

    }


    botonVideo.classList.remove(
        "oculto"
    );

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


    if (
        !botonVideo ||
        !contenedorVideo ||
        !video
    ) {

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

        video.src =
            "";

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



/* ==================================================
   PÁGINAS
   ================================================== */

function actualizarAccionPagina() {

    const botonAccion =
        document.getElementById(
            "accionPagina"
        );


    if (!botonAccion) {

        return;

    }


    if (
        paginaActual >= 10
    ) {

        botonAccion.textContent =
            "VOLVER A INTERFAZ";

        return;

    }


    botonAccion.textContent =
        "SIGUIENTE PÁGINA";

}


function cargarPaginaEnVisor(
    numeroPagina
) {

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


function abrirPagina(
    numeroPagina
) {

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



/* ==================================================
   CIERRE DEL VISOR
   ================================================== */

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



/* ==================================================
   PROTECCIONES EXISTENTES
   ================================================== */

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



/* ==================================================
   IMÁGENES
   ================================================== */

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
   CARRUSEL HORIZONTAL
   ================================================== */

const carruselHojas =
    document.getElementById(
        "carruselHojas"
    );


if (carruselHojas) {

    carruselHojas.addEventListener(
        "touchstart",
        function() {

            desbloquearTimbreConInteraccion();

        },
        {
            passive: true,
            once: true
        }
    );

}



/* ==================================================
   PRIMERA INTERACCIÓN PARA AUDIO
   ================================================== */

document.addEventListener(
    "pointerdown",
    function() {

        desbloquearTimbreConInteraccion();

    },
    {
        passive: true,
        once: true
    }
);


/* ==================================================
   INICIO
   ================================================== */

window.addEventListener(
    "load",
    function() {

        programarTimbreRecreo();

    }
);
