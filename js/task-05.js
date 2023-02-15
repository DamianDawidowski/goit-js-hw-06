const inputArea = document.querySelector("#name-input");
const nameArea = document.querySelector("#name-output");

inputArea.addEventListener("input", (event) => {
  nameArea.textContent = event.currentTarget.value;
  if (nameArea.textContent === "") {
    nameArea.textContent = "Anonymous";
  }
});
