const selectors = {
  form: document.querySelector(".login-form"),
  btn: document.querySelector("button"),
};

selectors.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    userEmail: email.value,
    userPassword: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Вам необхідно заповнити всі поля!");
  }
  console.log(data);
}
