// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addListitemEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const element = document.createElement("li");
  element.textContent = ingredients[i];
  element.classList.add("item");
  addListitemEl.append(element);
}
