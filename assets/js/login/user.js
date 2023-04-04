//Create user module to reusable to restrict/access to some private pages
let user = (function () {

  let authenticateUserPassword;
  let userObj = {};
  let user = {};

  //   get user from local storage
  function loadUser() {
    user = JSON.parse(localStorage.getItem("user"));
  }

  // get registed user  && set default account
  function loadRegisterdUser() {
    authenticateUserPassword = JSON.parse(localStorage.getItem("listUsers"));
    if (!authenticateUserPassword) {
      authenticateUserPassword = {
        admin: "admin",
      };
    }
  }

  loadUser();
  loadRegisterdUser();

  //   Chect if user login or not
  userObj.isAuthenticate = function () {
    if (!user || !user.username) {
      return false;
    }
    return true;
  };

  //   Get the current account
  userObj.getCurrentUser = function () {
    return user;
  };

  //   Log in
  userObj.authenticate = function (username, password) {
    //
    if (!authenticateUserPassword[username]) {
      throw new Error("User is not existed!");
    }

    if (authenticateUserPassword[username] != password) {
      throw new Error("Password is incorrect! Please try again!");
    }
    localStorage.setItem(
      "user",
      JSON.stringify({
        username,
        password,
      })
    );
    loadUser();
    return user;
  };

  //   Log out account
  userObj.logout = function () {
    user = {};
    localStorage.removeItem("user");
  };

  //   Register account
  userObj.register = function (username, password) {
    authenticateUserPassword[username] = password;
    localStorage.setItem("listUsers", JSON.stringify(authenticateUserPassword));
    loadRegisterdUser();
  };
  return userObj;
})();
