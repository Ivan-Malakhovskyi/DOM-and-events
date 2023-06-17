const refs = {
  div: document.querySelector("#controls"),
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  divBox: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(refs.input.value);
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const boxSize = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  refs.divBox.append(...boxes);
}

function destroyBoxes() {
  refs.divBox.innerHTML = "";
}
