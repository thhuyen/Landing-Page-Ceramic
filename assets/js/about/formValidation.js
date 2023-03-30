let nameInput = document.querySelector("#inputName");
let emailInput = document.querySelector("#inputEmail");
let msgInput = document.querySelector("#inputMsg");
let submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", isInputValid);

const clientMsg = [];

function isInputValid() {
  let nameAlert = document.querySelector("#name-invalid");
  let emailAlert = document.querySelector("#email-invalid");
  let msgAlert = document.querySelector("#msg-invalid");
  //   Check if name is empty or not
  !nameInput.value
    ? (nameAlert.textContent = "Please fill in your full name!!")
    : (nameAlert.textContent = "");

  // Check if email is valid or not
  //   email cannot be empty and must have at least 10 chars. It also has @ or .
  !emailInput.value ||
  emailInput.value.length <= 10 ||
  !emailInput.value.includes(".") ||
  !emailInput.value.includes("@")
    ? (emailAlert.textContent =
        "Email can not be empty and must have at least 10 letters with `@` or `.`!!")
    : (emailAlert.textContent = "");

  // Check if message is empty
  !msgInput.value
    ? (msgAlert.textContent =
        "Let us know more about you by writing somethings... :)")
    : (msgAlert.textContent = "");

  clientMsg.push({
    client: nameInput.value,
    email: emailInput.value,
    message: msgInput.value,
  });
}
