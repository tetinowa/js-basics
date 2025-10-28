const startButton = document.querySelector(".startButton");
const moles = document.querySelectorAll(".hole img");
let score = 0;
const scoreBoard = document.querySelector(".score");

startButton.addEventListener("click", () => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    mole.style.bottom = "0";

    setTimeout(() => {
      mole.style.bottom = "100%";
    }, Math.random() * 1000 + 500);
  }, Math.random() * 1000 + 500);
});

render = () => {
  scoreBoard.textContent = `Jews gassed: ${score}`;
};

moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    score++;
    render();
  });
});
