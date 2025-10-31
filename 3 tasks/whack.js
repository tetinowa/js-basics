const startButton = document.querySelector(".startButton");
const moles = document.querySelectorAll(".hole img");
let score = 0;
const scoreBoard = document.querySelector(".score");
let click = 0;
shown = false;
startButton.addEventListener("click", () => {
  setInterval(() => {
    if (!shown) {
      shown = true;

      const randomIndex = Math.floor(Math.random() * moles.length);
      const mole = moles[randomIndex];
      mole.style.bottom = "0";
      mole.style.pointerEvents = "auto";
      setTimeout(() => {
        mole.style.bottom = "100%";
        shown = false;
      }, Math.random() * 1000 + 500);
    }
  }, Math.random() * 1000 + 500);
});

render = () => {
  scoreBoard.textContent = `Jews gassed: ${score}`;
};

moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    click++;
    score++;
    render();
    mole.style.pointerEvents = "none";
  });
});
