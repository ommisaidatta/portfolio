AOS.init({
    duration: 1000,
    once: true
});

  const thresholdValue = window.innerWidth <= 768 ? 0.3 : 0.6;

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
      rootMargin: "0px 0px 40px 0px"
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });

  const toggleBtn = document.getElementById("menu-toggle");
  const navLink = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLink.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

 document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLink.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

