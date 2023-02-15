function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const btnCreate = document.querySelector("button");
const btnDestroy = btnCreate.nextElementSibling;
const targetDiv = document.querySelector("#boxes");
let inputVal = input.value;
let count = 0;
let dimension = 20;
const createBoxes = () => {
  for (let i = 1; i <= inputVal; i++) {
    dimension += 10;
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${dimension}px`;
    newDiv.style.height = `${dimension}px`;
    targetDiv.append(newDiv);
    count++;
  }
};
btnCreate.addEventListener("click", (event) => createBoxes());
btnDestroy.addEventListener("click", (event) => {
  targetDiv.textContent = "";
});
