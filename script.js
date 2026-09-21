const menuBtn = document.querySelector('.menu');
const navEl = document.querySelector('.nav nav');
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

// Toggle mobile menu
menuBtn?.addEventListener('click', () => {
  navEl?.classList.toggle('open');
});

// Close mobile menu on link click (mobile screen widths)
document.querySelectorAll('.nav nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 850) {
      navEl?.classList.remove('open');
    }
  });
});

// Lightbox Handlers
function openLightbox(imageSrc) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = imageSrc;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});
