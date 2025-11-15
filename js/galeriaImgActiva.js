const btnCierra = document.querySelector("#btn-cerrar");
const btnAdelante = document.querySelector("#btn-adelante");
const btnAtras = document.querySelector("#btn-atras");
const lightbox = document.querySelector("#contenedor-principal");
const imagenActiva = document.querySelector("#imagen-activa");

let imagenes = [];
let indiceImagen = 0;

// Delegación de eventos — Detecta clic en cualquier imagen
document.querySelector("#contenido").addEventListener("click", (event) => {

    if (event.target.tagName === "IMG" && !event.target.closest("#contenedor-principal")) {

        // 🔥 ESTA ES LA PARTE IMPORTANTE 🔥
        // Tomar SOLO las imágenes del contenedor al que pertenece la imagen tocada
        const contenedor = event.target.closest("div");
        imagenes = Array.from(contenedor.querySelectorAll("img"));

        // Obtener índice de imagen actual
        indiceImagen = imagenes.indexOf(event.target);

        imagenActiva.src = event.target.src;
        lightbox.style.display = "flex";
    }
});

// Cerrar
btnCierra.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Adelante
btnAdelante.addEventListener("click", () => {
    indiceImagen = (indiceImagen + 1) % imagenes.length;
    imagenActiva.src = imagenes[indiceImagen].src;
});

// Atrás
btnAtras.addEventListener("click", () => {
    indiceImagen = (indiceImagen - 1 + imagenes.length) % imagenes.length;
    imagenActiva.src = imagenes[indiceImagen].src;
});
