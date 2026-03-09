// --- 1. MOBILE MENU TOGGLE ---
const menuToggle = document.querySelector(".menu-toggle");
const navContainer = document.querySelector(".nav-container");

if (menuToggle && navContainer) {
  menuToggle.addEventListener("click", () => {
    navContainer.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    if (navContainer.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
}

// --- 2. SMART HEADER LOGIC ---
const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");

  if (currentScrollY > lastScrollY && currentScrollY > 50)
    header.classList.add("hide");
  else header.classList.remove("hide");
  lastScrollY = currentScrollY;
});

// --- 3. REVERSIBLE FADE ANIMATION ---
// This handles the general fade-in effects for elements with the "reveal" class
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
      else entry.target.classList.remove("active");
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));
