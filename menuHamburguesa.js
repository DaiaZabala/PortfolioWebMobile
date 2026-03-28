document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    // Alternar la clase 'show' para mostrar/ocultar el menú
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Cerrar el menú automáticamente y hacer scroll suave al tocar un enlace
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        
        // Si es un enlace interno a una sección (empieza con #)
        if (targetId && targetId.startsWith("#")) {
          e.preventDefault(); // Evita el salto instantáneo
          navLinks.classList.remove("show"); // Cierra el menú
          
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            const headerHeight = 70; // Altura aproximada de tu menú fijo
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1000; // 👈 1000ms = 1 segundo. Puedes aumentarlo (ej. 1500) para que sea más lento
            let start = null;

            window.requestAnimationFrame(function step(timestamp) {
              if (!start) start = timestamp;
              const progress = timestamp - start;
              
              // Efecto de suavizado: arranca lento, acelera, frena lento
              const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
              const percent = Math.min(progress / duration, 1);
              
              window.scrollTo(0, startPosition + distance * easeInOut(percent));
              
              if (progress < duration) {
                window.requestAnimationFrame(step);
              }
            });
          }
        } else {
          // Si es un enlace externo (como GitHub), solo cerramos el menú
          navLinks.classList.remove("show");
        }
      });
    });
  }

  // Resaltar enlace activo según el scroll
  const sections = document.querySelectorAll("main[id], section[id]");
  const navItems = document.querySelectorAll("#nav-links a:not(.boton)");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) { // Restamos 150px por la altura del header fijo
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  });
});