const selectors = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

selectors.input.addEventListener("input", handlerMakeCurrentEnter);
selectors.output.addEventListener("change", handlerGetCurrentInput);

function handlerMakeCurrentEnter(evt) {
  const inputQuery = evt.currentTarget.value;

  selectors.output.textContent = inputQuery ? inputQuery : "Anonymous";
}

function handlerGetCurrentInput(evt) {
  const outputQuery = evt.currentTarget.textContent;

  selectors.input.value = outputQuery !== "Anonymous" ? outputQuery : "";
}
