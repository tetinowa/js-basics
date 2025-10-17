const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");
const calcbtn = document.querySelector(".calc");
let answer = document.getElementById("answer");

answer.textContent = 0;

calcbtn.addEventListener(
  "click",
  () => (answer = Number(num1.value) + Number(num2.value)),
  (answer.textContent = answer)
);
