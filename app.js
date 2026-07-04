// ===== CHAPTERS TOGGLE =====
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".chapter-header").forEach(header => {

    header.addEventListener("click", () => {

      const chapter = header.closest(".chapter");

      if (chapter) {
        chapter.classList.toggle("open");
      }

    });

  });

});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    window.scrollTo({
      top: target.offsetTop - 64,
      behavior: "smooth"
    });
  });
});

// ===== NAV ACTIVE =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

if (sections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = "";

          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.style.color = "var(--blue-light)";
          }
        });
      }
    });
  }, {
    rootMargin: "-50% 0px -50% 0px"
  });

  sections.forEach(section => observer.observe(section));
}