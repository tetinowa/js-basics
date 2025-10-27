// const container = document.getElementsByClassName("container");

// container[0].addEventListener("click", () => {
//   container[0].style.backgroundColor = "";
// });

const box = document.querySelectorAll(".container");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseenter", () => {
    console.log({ h: box[i].style.backgroundColor });

    if (box[i].style.backgroundColor == "rgb(170, 242, 255)") {
      box[i].style.backgroundColor = "#ffc8f9ff";
    } else {
      box[i].style.backgroundColor = "rgb(170, 242, 255)";
    }
  });
}
