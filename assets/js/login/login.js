//use setTimeout to run login after render header element
setTimeout(function () {
  var button = document.getElementById("btnLoginClick");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    login();
  });
  var loginIconBtn = document.getElementById("loginModel");
  loginIconBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (user.isAuthenticate()) {
      window.location.href = "/pages/login/userInfo.html";
    } else {
      document.getElementById("id01").style.display = "block";
    }
  });
  function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    try {
      user.authenticate(username, password);
      const userData = user.getCurrentUser();
      window.location.href = "/pages/login/userInfo.html";

    } catch (error) {
      console.log(error);
      alert("" + error);
    }
  }
}, 100);
