const inputArea = document.querySelector("input");
let targetLenght = inputArea.dataset.length;
inputArea.addEventListener("blur", (event) => {
  if (inputArea.value.length == targetLenght) {
    inputArea.setAttribute("class", "valid");
  } else {
    inputArea.setAttribute("class", "invalid");
  }
});
