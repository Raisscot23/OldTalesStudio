document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const cerrarBtn = document.getElementById("cerrarPopup");

    // Comprobar si ya se mostró el popup en esta sesión
    const popupMostrado = sessionStorage.getItem("popupMostrado");

    if (!popupMostrado) {
        // Mostrar popup después de 1 segundo
        setTimeout(() => {
            popup.classList.add("active");
        }, 1000);

        // Guardar en sessionStorage que ya se mostró
        sessionStorage.setItem("popupMostrado", "true");
    }

    // Cerrar al presionar el botón
    cerrarBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Cerrar al hacer clic fuera del contenido
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });
});
