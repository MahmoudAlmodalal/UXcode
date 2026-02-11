(function () {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector("#primary-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
  const year = document.querySelector("#current-year");
  const progressBar = document.querySelector("#scroll-progress-bar");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      nav.classList.toggle("is-open");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      if (!targetId) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (nav && nav.classList.contains("is-open") && navToggle) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  const onScroll = function () {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  const updateScrollProgress = function () {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) {
      progressBar.style.width = "0%";
      return;
    }
    const ratio = Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
    progressBar.style.width = ratio.toFixed(2) + "%";
  };

  const onViewportChange = function () {
    onScroll();
    updateScrollProgress();
  };

  window.addEventListener("scroll", onViewportChange, { passive: true });
  window.addEventListener("resize", updateScrollProgress);
  onViewportChange();
})();
