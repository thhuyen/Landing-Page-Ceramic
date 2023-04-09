let btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click", (event) => {
  event.preventDefault();
  register();
});

function register() {
  let username = document.getElementById("register-username").value;
  let password = document.getElementById("register-password").value;
  try {
    if (!username || username.length <= 5) {
      document.getElementById("register-error-msg").innerText =
        "Username required at least 5 digits!!!";
      return;
    }
    if (!password || password.length <= 5) {
      document.getElementById("register-error-msg").innerText =
        "Password required at least 5 digits!!!";
      return;
    }

    const exist = user.exist(username);
    if (exist) {
      document.getElementById("register-error-msg").innerText =
        "Username has been registered!!!";
      return;
    }
    user.register(username, password);

    alert("Register successfully!!!");
    window.location.href = "/pages/home.html";
  } catch (error) {
    console.log(error);
    alert("" + error);
  }
}
