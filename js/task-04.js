let counterValue = 0;
let referenceArea = document.querySelector("#value");
const decrementBtn = referenceArea.previousElementSibling;
const incrementBtn = referenceArea.nextElementSibling;
referenceArea.textContent = `${counterValue}`;
console.log(referenceArea.textContent);
const increaseByClick = (event) => {
  counterValue++;
  referenceArea.textContent = `${counterValue}`;
};
const decreaseByClick = (event2) => {
  counterValue--;
  referenceArea.textContent = `${counterValue}`;
};
decrementBtn.addEventListener("click", decreaseByClick);
incrementBtn.addEventListener("click", increaseByClick);
