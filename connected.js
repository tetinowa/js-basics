const container = document.getElementsByClassName("container");

container[0].addEventListener("click", () => {
  container[0].style.backgroundColor = "red";
});

const box = document.querySelectorAll(".container");

for (let i = 0; i < box.length; i++) {
  if (box[i].style.backgroundColor === "aquamarine") {
    box[i].style.backgroundColor = "pink";
  } else {
    box[i].style.backgroundColor = "blue";
  }
}
