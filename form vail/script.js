const inputs = document.querySelectorAll("input");
const form = document.getElementById("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const showPassword = document.getElementById("show-password");
const matchPassword = document.getElementById("match");
const submit = document.getElementById("submit");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    if (event.target.value) {
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
    }
  });
});

showPassword.addEventListener("click", (event) => {
  if (password.type == "password") {
    password.type = "text";
    confirmPassword.type = "text";
    showPassword.innerText = "hide";
    showPassword.setAttribute("aria-label", "hide password");
    showPassword.setAttribute("aria-checked", "true");
  } else {
    password.type = "password";
    confirmPassword.type = "password";
    showPassword.innerText = "show";
    showPassword.setAttribute("aria-label", "show password");
    showPassword.setAttribute("aria-checked", "false");
  }
});

const updateRequirement = (id, valid) => {
  const requirement = document.getElementById(id);

  if (valid) {
    requirement.classList.add("valid");
  } else {
    requirement.classList.remove("valid");
  }
};

password.addEventListener("input", (event) => {
  const value = event.target.value;

  updateRequirement("length", value.length >= 8);
  updateRequirement("lowercase", /[a-z]/.test(value));
  updateRequirement("uppercase", /[A-Z]/.test(value));
  updateRequirement("number", /\d/.test(value));
  updateRequirement("characters", /[#.?!@$%^&*-]/.test(value));
});

confirmPassword.addEventListener("blur", (event) => {
  const value = event.target.value;

  if (value.length && value != password.value) {
    matchPassword.classList.remove("hidden");
  } else {
    matchPassword.classList.add("hidden");
  }
});

confirmPassword.addEventListener("focus", (event) => {
  matchPassword.classList.add("hidden");
});

const handleFormValidation = () => {
  const value = password.value;
  const confirmValue = confirmPassword.value;

  if (
    value.length >= 8 &&
    /[a-z]/.test(value) &&
    /[A-Z]/.test(value) &&
    /\d/.test(value) &&
    /[#.?!@$%^&*-]/.test(value) &&
    value == confirmValue
  ) {
    submit.removeAttribute("disabled");
    return true;
  }

  submit.setAttribute("disabled", true);
  return false;
};

form.addEventListener("change", () => {
  handleFormValidation();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const validForm = handleFormValidation();

  if (!validForm) {
    return false;
  }

  alert("Form submitted");
});
