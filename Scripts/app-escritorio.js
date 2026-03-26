document.addEventListener("dblclick", (event) => {
  // Buscamos si el clic fue en un icono con el atributo data-open="mi-ventana"
  const icono = event.target.closest(".open-windows");

  if (icono) {
    const ventana = document.getElementById("desktop");
    if (ventana) {
      ventana.style.display = "flex"; // O "block", según tu diseño
      // Opcional: traer al frente usando z-index
      ventana.style.zIndex = "100";
    }
  }
});

document.addEventListener("dblclick", (event) => {
  const icono = event.target.closest(".cambio-Fondo");

  if (icono) {
    // Definimos los dos colores
    const color1 = "rgb(129, 119, 173)"; // Es #6e63a1 en formato RGB
    const color2 = "rgb(99, 157, 161)"; // O el color original que prefieras
    const imagen3 = "url('img/1367660.jpeg')";

    const fondoActual = document.body.style.backgroundColor;
    const miTexto = document.getElementById("app-texto");

    // Si el color actual es el primero, ponemos el segundo. Si no, ponemos el primero.
    if (fondoActual === color1) {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = color2;
    } else if (fondoActual === color2) {
      document.body.style.backgroundColor = "transparent";
      document.body.style.backgroundImage = `linear-gradient(rgba(0,10,50,0.5), rgba(0,0,0,0)), ${imagen3}`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "auto";
      miTexto.style.color = "white";
    } else {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = color1;
    }
  }
});

document.addEventListener("click", function (e) {
  const tab = e.target.closest(".tabs li");

  if (tab) {
    const contenedorUl = tab.closest("ul");

    // --- NUEVO: Gestión de la apariencia del botón ---
    // Quitamos 'is-selected' de todos los hermanos
    contenedorUl
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove("is-selected"));
    // Se la ponemos al que clickeamos
    tab.classList.add("is-selected");
    // ------------------------------------------------

    // --- Tu código de la línea dinámica ---
    document.querySelectorAll(".linea-dinamica").forEach((l) => l.remove());
    const nuevaLinea = document.createElement("div");
    nuevaLinea.classList.add("linea-dinamica");

    const rectBoton = tab.getBoundingClientRect();
    const rectContenedor = contenedorUl.getBoundingClientRect();
    const distanciaAlFinal = rectContenedor.right - rectBoton.right;

    nuevaLinea.style.width = distanciaAlFinal - -3 + "px";
    tab.appendChild(nuevaLinea);
  }
});
