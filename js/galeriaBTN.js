document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".seleccion");

  const galeriaIlustracion = document.getElementById("galeria1");
  const galeriaProgramador = document.getElementById("galeria-programador");
  const galeriaEditor = document.getElementById("galeria-editor"); // Por si lo necesitas

  // Contenido solo para ilustración
  const ilustracionData = {
    titulo: "Ilustración Digital / Tradicional",
    imagenes: [
      "recursos/imgs/img1.png",
      "recursos/imgs/img2.png",
      "recursos/imgs/img3.png",
      "recursos/imgs/img4.png",
      "recursos/imgs/img5.png",
      "recursos/imgs/img6.png",
      "recursos/imgs/img7.png",
      "recursos/imgs/img8.png",
      "recursos/imgs/img9.png",
      "recursos/imgs/img10.png",
      "recursos/imgs/img11.png",
      "recursos/imgs/img12.png",
      "recursos/imgs/img13.png",
      "recursos/imgs/img14.png",
      "recursos/imgs/img15.png",
      "recursos/imgs/img16.png",
      "recursos/imgs/img17.png",
      "recursos/imgs/img18.png",
      "recursos/imgs/img19.png",
      "recursos/imgs/img20.png",

      "recursos/imgs/digital1.jpg",
      "recursos/imgs/digital2.jpg",
      "recursos/imgs/digital3.jpg",
      "recursos/imgs/digital4.jpg",
      "recursos/imgs/digital5.jpg",
      "recursos/imgs/digital6.jpg",
      "recursos/imgs/digital7.png",
      "recursos/imgs/digital8.png",
      "recursos/imgs/digital9.png",
      "recursos/imgs/digital10.png",
      "recursos/imgs/digital11.png",
      "recursos/imgs/digital12.png",
      "recursos/imgs/digital13.png",
    ]
  };

  function ocultarTodas() {
    galeriaIlustracion.style.display = "none";
    galeriaProgramador.style.display = "none";
    if (galeriaEditor) galeriaEditor.style.display = "none";
  }

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const tipo = boton.textContent.trim().toLowerCase();

      ocultarTodas(); // Siempre ocultamos antes

      // ILUSTRACIÓN (dinámico)
      if (tipo.includes("ilustr")) {
        galeriaIlustracion.style.display = "block";
        galeriaIlustracion.innerHTML = `
          <h2>${ilustracionData.titulo}</h2>
          <div class="trabajos_ilustracion">
            ${ilustracionData.imagenes.map(src => `<img src="${src}" alt="">`).join("")}
          </div>
        `;
      }

      // PROGRAMADOR (HTML fijo)
      else if (tipo.includes("program")) {
        galeriaProgramador.style.display = "block";
      }

      // EDITOR (HTML fijo)
      else if (tipo.includes("editor")) {
        galeriaEditor.style.display = "block";
      }
    });
  });
});
