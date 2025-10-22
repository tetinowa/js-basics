let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hr = document.querySelector(".hour");
const start = document.getElementsByClassName("start")[0];
const reset = document.getElementsByClassName("reset")[0];
const stop = document.getElementsByClassName("stop")[0];

sec = 0;
min = 0;
hr = 0;
let a;

function displayTime() {
  sec += 1;

  if (sec === 60) {
    sec = 0;
    min += 1;

    if (min === 60) {
      min = 0;
      hr += 1;
    }
  }
}

a = setInterval(displayTime, 1000);
setInterval(() => {
  document.querySelector(".sec").innerText = sec < 10 ? "0" + sec : sec;
  document.querySelector(".min").innerText = min < 10 ? "0" + min : min;
  document.querySelector(".hour").innerText = hr < 10 ? "0" + hr : hr;
}, 1000);

function resetTime() {
  sec = 0;
  min = 0;
  hr = 0;
  clearInterval(a);
}
function stopTime() {
  clearInterval(a);
}

reset.addEventListener("click", resetTime);
stop.addEventListener("click", stopTime);
