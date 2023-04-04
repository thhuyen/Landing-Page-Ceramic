(function () {
  // Check if user had logged in or not
  const isAuthenticate = user.isAuthenticate();
  if (!isAuthenticate) {
    alert("Please log in to access this page!");
  }

  //   Get info of the latest user saved in currentUser
  const currentUser = user.getCurrentUser();
  const usernameBox = document.getElementById("username");
  const usernameConfirm = document.getElementById("username-2");
  const signoutBtn = document.getElementById("signout-btn");

  usernameBox.innerText = currentUser.username;
  usernameConfirm.innerText = currentUser.username;
  signoutBtn.addEventListener("click", (event) => {
    user.logout();
    alert("log out success");
    window.location.href = "/pages/home.html";
  });
})();
