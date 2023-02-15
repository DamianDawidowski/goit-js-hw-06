const Slider = document.querySelector("input");
const textArea = document.querySelector("#text");
Slider.addEventListener("input", (event) => {
  textArea.style.fontSize = `${Slider.value}px`;
});
