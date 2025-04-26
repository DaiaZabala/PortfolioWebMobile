document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formContacto");
    const mensaje = document.getElementById("mensajeEnviado");
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Mostrar mensaje de éxito
      mensaje.style.display = "block";
  
      // Limpiar formulario
      formulario.reset();
  
      // Ocultar el mensaje luego de unos segundos
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 4000);
    });
  });
  