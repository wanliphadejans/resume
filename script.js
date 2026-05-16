(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav__toggle");
  const navList = document.getElementById("primary-nav");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header shadow once user scrolls
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu toggle
  if (toggle && navList) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      navList.classList.toggle("is-open", !open);
    });

    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
      if (
        navList.classList.contains("is-open") &&
        !navList.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Scroll-reveal via IntersectionObserver
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el, i) => {
      // Stagger child reveals slightly
      el.style.transitionDelay = `${Math.min(i * 40, 220)}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
})();
