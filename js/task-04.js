let counterValue = 0;

const refs = {
  counter: document.querySelector("#counter"),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  currentValue: document.querySelector("#value"),
};
refs.btnDecrement.addEventListener("click", handlerButtonDecrement);
refs.btnIncrement.addEventListener("click", handlerButtonIncrement);
refs.currentValue.addEventListener("change", handlerChangeCurrentValue);
refs.counter.addEventListener("click", handlerChangeCurrentValue);

function handlerButtonDecrement() {
  counterValue -= 1;

  refs.currentValue.textContent = counterValue;
}

function handlerButtonIncrement() {
  counterValue += 1;
  refs.currentValue.textContent = counterValue;
}

function handlerChangeCurrentValue() {
  counterValue = parseFloat(refs.currentValue.textContent) || 0;
}
