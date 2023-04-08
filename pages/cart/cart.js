let shoppingCart = (function () {
  // Private methods and properties
  let cart = [];
  let paymentInfo = {};


  function Item(id, name, price, img, quantity) {
    return { id, name, price, img, quantity: quantity || 1 };
  }

  // save info of Cart to local storage
  function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  // get info of Cart from local storage
  function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (cart === null) {
      cart = {};
    }
  }


  // save info that user input in payment process
  function savePaymentInfo() {
    localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
  }

  // get user payment info from local storage
  function loadPaymentInfo() {
    paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));
    if (paymentInfo === null) {
      paymentInfo = [];
    }
  }

  loadCart();
  loadPaymentInfo();

  // Public methods and properties
  let obj = {};

  // Update payment info of user when receiving user's input

  obj.updatePaymentInfo = function (
    phone,
    email,
    firstname,
    lastname,
    address,
    note
  ) {
    paymentInfo = {
      phone,
      email,
      firstname,
      lastname,
      address,
      note,
    };
    savePaymentInfo();
  };


  // Remove payment info of user
  obj.removePaymentInfo = function () {
    paymentInfo = {};
    savePaymentInfo();
  };
  // Add item to Cart
  obj.addItemToCart = function ({
    id,
    name,
    price,
    img,
    rate,
    type,
    quantity,
  }) {
    for (let i in cart) {
      if (cart[i].id === id) {
        cart[i].quantity += quantity;
        saveCart();
        return;
      }
    }
    let item = new Item(id, name, price, img);
    cart.push(item);
    saveCart();
  };

  // Set quantity to update Cart
  obj.setQttForItem = function (id, quantity) {
    for (let i in cart) {
      if (cart[i].id == id) {
        cart[i].quantity = quantity;
        break;
      }
    }
    saveCart();
  };

  // Add 1 in quantity of selected items
  obj.addItemtoCart = function (id) {
    for (let i in cart) {
      if (cart[i].id == id) {
        cart[i].quantity++;
        break;
      }
    }
    saveCart();
  };

  // Remove Item fromm Cart
  // Remove (decrease) 1 item from quantity.
  obj.removeItemFromQuantity = function (id) {
    for (let i in cart) {
      if (cart[i].id == id) {
        cart[i].quantity--;
        if (cart[i].quantity === 0) {
          cart.splice(i, 1);
        }
        break;
      }
    }
    saveCart();
  };

  // removes a row of selected item in the (X) button
  obj.removeItemRow = function (id) {
    for (let i in cart) {
      if (cart[i].id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    saveCart();
  };

  //return total items added
  obj.countCart = function () {
    var totalCount = 0;
    for (var i in cart) {
      totalCount += cart[i].quantity;
    }

    return totalCount;
  };

  // return total cost
  obj.totalCart = function () {
    let totalCost = 0;
    for (let i in cart) {
      totalCost += cart[i].price * cart[i].quantity;
    }
    return totalCost.toFixed(2);
  };

  // get an array of all Items
  obj.listCart = function () {
    var cartCopy = [];

    for (let i in cart) {
      let item = cart[i];
      let itemCopy = {};
      for (let p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = (item.price * item.quantity).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  // Get user Payment info
  obj.getPaymentInfo = function () {
    return {
      ...paymentInfo,
    };
  };

  return obj;
})();
