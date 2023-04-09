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
    alert("Log out successfully!!");
    window.location.href = "/pages/home.html";
  });
})();

(function () {
  // Optional render for total items in cart
  let cartQtt = document.querySelector("#totalItemsInCart");
  console.log(cartQtt);
  let numOfItemsInCart = shoppingCart.countCart();
  numOfItemsInCart == 0
    ? (cartQtt.innerHTML = `<p class="order-status">You haven't placed any orders yet.</p>`)
    : (cartQtt.innerHTML = `<p class="order-status">Your lovely cart has been filled with ${numOfItemsInCart} items.</p>`);

  //
})();

