// ================= ACTIVE NAV LINK ON SCROLL =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// ================= SCROLL REVEAL =================
const revealSections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// ================= CUSTOM CURSOR =================
const cursor = document.querySelector(".cursor");

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  if (!cursor) return;

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
});

// ================= GLOW BACKGROUND FOLLOW =================
const glowBg = document.querySelector(".glow-bg");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  glowBg.style.background = `
    radial-gradient(
      circle at ${x}px ${y}px,
      rgba(56, 189, 248, 0.18),
      rgba(15, 23, 42, 0.95) 60%
    )
  `;
});
