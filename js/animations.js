(function () {
  const revealItems = document.querySelectorAll(".reveal");
  const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
  const sections = document.querySelectorAll("main section[id]");
  const counterItems = document.querySelectorAll(".count-up");
  const tiltCards = document.querySelectorAll(".tilt-card");
  const heroVisual = document.querySelector(".hero-visual");
  const visualPanel = document.querySelector(".visual-panel");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  const getActiveSectionId = function () {
    let activeId = "";
    const scrollPosition = window.scrollY + 160;
    sections.forEach(function (section) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        activeId = section.id;
      }
    });
    return activeId;
  };

  const highlightNav = function () {
    const activeId = getActiveSectionId();
    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (!href) return;
      if (href === "#" + activeId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  const animateCounter = function (element) {
    const target = Number(element.dataset.count || "0");
    const suffix = String(element.dataset.suffix || "");
    if (!Number.isFinite(target) || target <= 0) {
      return;
    }

    const duration = 1400;
    const start = performance.now();

    const step = function (now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      element.textContent = String(value) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = String(target) + suffix;
      }
    };

    requestAnimationFrame(step);
  };

  if (counterItems.length > 0) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      counterItems.forEach(function (item) {
        const target = Number(item.dataset.count || "0");
        const suffix = String(item.dataset.suffix || "");
        if (target > 0) item.textContent = String(target) + suffix;
      });
    } else {
      const counterObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.5 }
      );

      counterItems.forEach(function (item) {
        counterObserver.observe(item);
      });
    }
  }

  if (!prefersReducedMotion && supportsHover) {
    const maxRotate = 5;
    tiltCards.forEach(function (card) {
      card.addEventListener("mousemove", function (event) {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * maxRotate * 2;
        const rotateX = (0.5 - y) * maxRotate * 2;
        card.style.transform = "translateY(-4px) rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" + rotateY.toFixed(2) + "deg)";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });

    if (heroVisual && visualPanel) {
      heroVisual.addEventListener("mousemove", function (event) {
        const rect = heroVisual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 5;
        const rotateX = (0.5 - y) * 5;
        visualPanel.style.transform = "rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" + rotateY.toFixed(2) + "deg)";
      });

      heroVisual.addEventListener("mouseleave", function () {
        visualPanel.style.transform = "";
      });
    }
  }
})();
