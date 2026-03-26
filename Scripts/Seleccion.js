document.addEventListener("DOMContentLoaded", () => {
  // CORREGIDO: Se agregó el punto "." antes de nav-link
  const links = document.querySelectorAll(".nav-link");
  const contentArea = document.getElementById("dynamic-content");

  const windowTitle = document.getElementById("windows-title");
  const mainTitle = document.getElementById("Windows-title"); // El de arriba (Ojo con la W mayúscula)

  const loadPage = (pageName) => {
    fetch(`${pageName}.html`)
      .then((response) => {
        if (!response.ok) throw new Error("No se encontró el archivo");
        return response.text();
      })
      .then((html) => {
        contentArea.innerHTML = html;
        if (windowTitle) {
          windowTitle.innerText = `${pageName}.txt`;
        }
        if (mainTitle) {
          // Esto cambia el Portafolio-Personal.com por el nombre de la sección
          mainTitle.innerText = "Portafolio - " + pageName.replace("_", " ");
        }
      })
      .catch((error) => {
        contentArea.innerHTML = `<h2>TRABAJANDO EN ESTA SECCIÓN</h2><p>El archivo ${pageName}.html aun no esta listo.</p>`;
      });
  };

  // Carga inicial
  loadPage("acerca_de_mi");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("selected"));
      link.classList.add("selected");

      const targetPage = link.getAttribute("data-target");
      loadPage(targetPage);
    });
  });
});

// Usamos el punto para indicar que es una clase CSS
document.addEventListener("click", (event) => {
  // 1. Buscamos si el clic fue en el botón o dentro del botón (por la imagen)
  const botonCerrar = event.target.closest("#btn-cerrar");

  // 2. Si se hizo clic en el botón de cerrar
  if (botonCerrar) {
    // Buscamos la ventana más cercana al botón para cerrarla
    // Cambia ".window" por la clase real de tu ventana (ej. .desktop)
    const ventana = document.querySelector(".desktop");

    if (ventana) {
      ventana.style.display = "none";
      console.log("Ventana cerrada correctamente.");
    } else {
      console.error("Se encontró el botón, pero no la ventana (.window)");
    }
  }
});

function apagarTV() {
  window.close();
}
