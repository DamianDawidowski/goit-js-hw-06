const primaryUlList = document.querySelector("#categories");
const primaryUlListElements = primaryUlList.children;
const primaryUlListCount = primaryUlListElements.length;
console.log(`Number of categories: ${primaryUlListCount}`);
const primaryUlListElementArray = Array.from(primaryUlListElements);
for (const li of primaryUlListElementArray) {
  let h2Text = li.querySelector("h2").textContent;
  console.log(`Category: ${h2Text}`);
  let innerUlList = li.querySelector("ul");
  let innerUlListCount = Array.from(innerUlList.children).length;
  console.log(`Elements: ${innerUlListCount}`);
}
