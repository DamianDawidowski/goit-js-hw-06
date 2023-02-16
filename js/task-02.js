const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulList = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  let liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  ulList.append(liElement);
}
