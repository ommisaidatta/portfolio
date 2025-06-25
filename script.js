AOS.init({
    duration: 1000,
    once: true
});

  const thresholdValue = window.innerWidth <= 768 ? 0.5 : 0.6;

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      threshold: thresholdValue,
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });

