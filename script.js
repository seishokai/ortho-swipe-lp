const swipe = document.getElementById("swipe");
const dots = Array.from(document.querySelectorAll(".dot"));
const slides = Array.from(document.querySelectorAll(".slide"));

function updateDots() {
  const scrollTop = swipe.scrollTop;
  let current = 0;
  let min = Infinity;

  slides.forEach((slide, index) => {
    const diff = Math.abs(slide.offsetTop - scrollTop);
    if (diff < min) {
      min = diff;
      current = index;
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === current);
  });
}

swipe.addEventListener("scroll", () => {
  window.requestAnimationFrame(updateDots);
});

document.querySelectorAll(".tap-cta").forEach((cta) => {
  cta.addEventListener("click", () => {
    console.log("image CTA clicked");
  });
});

updateDots();
