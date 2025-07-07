// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach(section => {
  observer.observe(section);
});

// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Hamburger menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}

// Typewriter effect
const tagline = "Web Developer | Creative Thinker | Problem Solver";
let index = 0;
function typeWriter() {
  if (index < tagline.length) {
    document.getElementById("tagline").textContent += tagline.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgBox = document.getElementById("formMsg");

  if (name && email && message) {
    msgBox.textContent = "Thank you! I will get back to you soon.";
    msgBox.style.color = "green";
    this.reset();
  } else {
    msgBox.textContent = "Please fill in all fields.";
    msgBox.style.color = "red";
  }
});