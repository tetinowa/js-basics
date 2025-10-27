const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelector(".slides");
const allslides = document.querySelectorAll(".slide");
let currentSlide = 0;

slides.style.transform = `translateX)-${(currentSlide - 1) * 400}px)`;

allslides[currentSlide].style.scale = 1;

prev.addEventListener("click", () => {
  if (currentSlide === 0) return;
  allslides[currentSlide].style.scale = 0.7;
  currentSlide--;
  allslides[currentSlide].style.scale = 1;
  slides.style.transform = `translateX(-${(currentSlide - 1) * 400}px)`;
});

next.addEventListener("click", () => {
  if (currentSlide === allslides.length - 1) return;
  allslides[currentSlide].style.scale = 0.7;
  currentSlide++;
  allslides[currentSlide].style.scale = 1;
  slides.style.transform = `translateX(-${(currentSlide - 1) * 400}px)`;
});
