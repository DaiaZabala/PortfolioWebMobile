document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    // Alternar la clase 'show' para mostrar/ocultar el menú
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Cerrar el menú automáticamente al tocar un enlace
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
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