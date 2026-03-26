document.addEventListener("DOMContentLoaded", () => {
  const ventana = document.getElementById("desktop");
  const barra = document.getElementById("barra-arrastrable"); // La barra completa

  let enMovimiento = false;
  let despliegueX = 0;
  let despliegueY = 0;

  if (barra && ventana) {
    barra.addEventListener("mousedown", (e) => {
      // Importante: No arrastrar si se hace clic en el botón de cerrar
      if (e.target.closest("#btn-cerrar")) return;

      enMovimiento = true;

      // Calculamos el offset
      despliegueX = e.clientX - ventana.offsetLeft;
      despliegueY = e.clientY - ventana.offsetTop;

      barra.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
      if (enMovimiento) {
        e.preventDefault();

        // 1. Calculamos la posición deseada
        let x = e.clientX - despliegueX;
        let y = e.clientY - despliegueY;

        // 2. Definimos los límites (Márgenes de la pantalla)
        // El ancho/alto total menos el ancho/alto de tu ventana
        const limiteDerecho = window.innerWidth - ventana.offsetWidth;
        const limiteInferior = window.innerHeight - ventana.offsetHeight;

        // 3. Aplicamos los límites (Clamping)
        // No permitir que X sea menor a 0 ni mayor al borde derecho
        if (x < 0) x = 0;
        if (x > limiteDerecho) x = limiteDerecho;

        // No permitir que Y sea menor a 0 ni mayor al borde inferior
        if (y < 0) y = 0;
        if (y > limiteInferior) y = limiteInferior;

        // 4. Aplicamos la posición final protegida
        ventana.style.left = x + "px";
        ventana.style.top = y + "px";
      }
    });

    document.addEventListener("mouseup", () => {
      enMovimiento = false;
      if (barra) barra.style.cursor = "grab";
    });
  }
});
