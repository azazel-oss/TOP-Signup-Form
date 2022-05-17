const form = document.getElementById("form");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("cnf-password");
const errorEl = document.querySelector(".error");

form.addEventListener("submit", (event) => {
  if (password.value !== cnfPassword.value) {
    cnfPassword.style.border = "2px solid red";
    errorEl.textContent = "The passwords don't match";
    event.preventDefault();
  }
});
