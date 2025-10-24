const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelector(".carousel-container");
let i = null;

prev.addEventListener("click", () => {
  i++;
  slides.style.transform = `translateX(${-300 * i}px)`;
  console.log(i);
});

next.addEventListener("click", () => {
  i++;
  slides.style.transform = `translateX(${300 * i}px)`;
  console.log(i);
});
