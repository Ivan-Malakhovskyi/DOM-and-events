const selectors = {
  form: document.querySelector(".login-form"),
  btn: document.querySelector("button"),
};

selectors.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    alert("Вам необхідно заповнити всі поля!");
    return;
  }

  console.log(data);
  event.currentTarget.reset();
}

//*email.value.length = 0
//! !email.value.length or email.value
