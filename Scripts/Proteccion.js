// Escuchamos el clic derecho en todo el documento
document.addEventListener(
  "contextmenu",
  function (e) {
    // Si el elemento clickeado es una imagen (IMG)
    if (e.target.tagName === "IMG") {
      e.preventDefault(); // Bloquea el menú
      // Opcional: puedes mandar un mensaje a la consola o un alert
      console.log("Imagen protegida");
    }
  },
  false,
);
