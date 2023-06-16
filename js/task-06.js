const selectors = {
  input: document.querySelector("#validation-input"),
  validInput: document.querySelector(".valid"),
  invalidInput: document.querySelector(".invalid"),
  defaultInput: document.querySelector("#validation-input"),
};

selectors.input.addEventListener("blur", onCheckEnter);

function onCheckEnter(evt) {
  const inputValue = evt.currentTarget.value;
  const userInput = 6;
  if (inputValue.length === userInput) {
    selectors.input.classList.remove("invalid");
    selectors.input.classList.add("valid");
  } else {
    selectors.input.classList.add("invalid");
    selectors.input.classList.remove("valid");
  }
}
