//use setTimeout to run login after render header element
setTimeout(function () {
  let loginBtn = document.getElementById("btnLoginClick");
  let loginIconBtn = document.getElementById("loginIconBtn");

  // Add event for icon Account in the Header
  loginIconBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (user.isAuthenticate()) {
      window.location.href = "/pages/login/userInfo.html";
    } else {
      document.getElementById("id01").style.display = "block";
    }
  });

  // Add event for Login button in Login Modal form
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    login();
  });

  function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    try {
      user.authenticate(username, password);
      location.reload();
    } catch (error) {
      console.log(error);
      alert("" + error);
    }
  }
  let cartIconBtn = document.getElementById("cartIconBtn");

  cartIconBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (user.isAuthenticate()) {
      window.location.href = "/pages/cart/cart.html";
    } else {
      document.getElementById("id01").style.display = "block";
    }
  });
}, 100);
