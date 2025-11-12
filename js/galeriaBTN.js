document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".seleccion");
  const galeria = document.getElementById("galeria1");

  // Contenido para cada categoría
  const galerias = {
    ilustracion: {
      titulo: "Ilustración Digital / Tradicional",
      imagenes: [
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg"
      ]
    },
    programador: {
      titulo: "Proyectos de Programación",
      imagenes: [
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg"
      ]
    },
    editor: {
      titulo: "Edición de Video y Postproducción",
      imagenes: [
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg",
        "recursos/imgs/placeholder.jpg"
      ]
    }
  };

  // Asignar función a los botones
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const tipo = boton.textContent.trim().toLowerCase();

      // Determinar qué galería mostrar
      let key = "";
      if (tipo.includes("ilustr")) key = "ilustracion";
      else if (tipo.includes("program")) key = "programador";
      else if (tipo.includes("editor")) key = "editor";

      const seleccion = galerias[key];
      if (!seleccion) return;

      // Crear HTML dinámicamente
      galeria.innerHTML = `
        <h2>${seleccion.titulo}</h2>
        <div class="trabajos_ilustracion">
          ${seleccion.imagenes
            .map(src => `<img src="${src}" alt="">`)
            .join("")}
        </div>
      `;
    });
  });
});
