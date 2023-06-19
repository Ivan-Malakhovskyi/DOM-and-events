const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", handlerChangeFont);
refs.text.style.fontSize = refs.input.value + "px";
function handlerChangeFont() {
  const fontSize = refs.input.value + "px";
  refs.text.style.fontSize = fontSize;
}
