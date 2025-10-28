const container = document.querySelector(".container");
let waiting = false;
let startTime = 0;
let timeout;

container.addEventListener("click", () => {
  if (!waiting) {
    container.style.backgroundColor = "red";
    container.textContent = "Wait for green...";
    waiting = true;

    const delay = Math.random() * 2000 + 1000;
    timeout = setTimeout(() => {
      container.style.backgroundColor = "green";
      container.textContent = "Click!";
      startTime = Date.now();
    }, delay);
  } else {
    if (container.style.backgroundColor === "green") {
      const reactionTime = Date.now() - startTime;
      container.textContent = `Your time: ${reactionTime} ms`;
      container.style.backgroundColor = "#d9fff9";
      waiting = false;
      clearTimeout(timeout);
    } else {
      container.textContent = "Too soon!";
      container.style.backgroundColor = "gray";
      waiting = false;
      clearTimeout(timeout);
    }
  }
});