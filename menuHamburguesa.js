document.addEventListener("DOMContentLoaded", function () {
    // Cierra el menú al hacer clic en un link
    document.querySelectorAll('.navbar-collapse .nav-link').forEach(function(link) {
      link.addEventListener('click', function () {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbar) || new bootstrap.Collapse(navbar, { toggle: false });
          bsCollapse.hide();
        }
      });
    });

      // Cierra el menú al hacer scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbar) || new bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  });
  

// Esperar 10 segundos (10,000 milisegundos)
setTimeout(() => {
    const carousels = document.querySelectorAll('.carousel');
    console.log(`Carouseles encontrados: ${carousels.length}`); // Verificá que diga 3

    carousels.forEach(carrusel => {
      const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carrusel);
      carouselInstance.pause(); // Pausa el movimiento automático
    });
  }, 10000);
  


  });
  