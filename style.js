document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".animated-nav li a");
    navLinks.forEach((link, i) => {
      link.style.opacity = 0;
      link.style.transform = "translateY(-20px)";
      setTimeout(() => {
        link.style.transition = "all 0.6s ease";
        link.style.opacity = 1;
        link.style.transform = "translateY(0)";
      }, i * 200);
    });
  });