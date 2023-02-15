function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const Btn = document.querySelector("button");
const Body = document.querySelector("body");
const SpanColorvalue = document.querySelector("span");
Btn.addEventListener("click", (event) => {
  let newColor = getRandomHexColor();
  Body.style.backgroundColor = newColor;
  SpanColorvalue.textContent = newColor;
});
