const numberOfCategoriesEl = document.querySelector("#categories");
const allCategories = numberOfCategoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((category) => {
  const title = category.querySelector("h2");

  const elements = category.querySelectorAll("li");

  console.log("Category: ", title.textContent);
  console.log("Elements: ", elements.length);
});
