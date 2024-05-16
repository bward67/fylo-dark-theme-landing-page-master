const ctaBtn = document.querySelector("[data-cta-btn]");
const errorText = document.querySelector("[data-error-text]");
const input = document.querySelector("[data-input]");
const form = document.querySelector("[data-form]");

//FUNCTIONS
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

const checkInputs = () => {
  let emailInput = input.value.trim();
  if (emailInput === "") {
    errorText.classList.add("show");
    errorText.innerHTML = "This field cannot be empty";
    // errorText.style.transform = "translateX(-1.6rem)";
    errorText.style.marginLeft = "-3.9rem";
  } else if (!isValidEmail(emailInput)) {
    errorText.classList.add("show");
    errorText.innerHTML = "Please enter a valid email address";
    errorText.style.marginLeft = "-1.4rem";
  } else {
    errorText.classList.remove("show");
  }
  input.value = "";
};

//EVENT LISTENERS
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

ctaBtn.addEventListener("click", () => {
  checkInputs();
});
