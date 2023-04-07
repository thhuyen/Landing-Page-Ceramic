//use setTimeout to run cart after render header element
// var add1 = (id) => {
//   shoppingCart.addItemToCart({
//     id: id,
//     quantity: 1,
//   });
// };

if (!user.isAuthenticate()) {
  alert("must login to view this page");
  window.location.href = "/pages/home.html";
}

var minus1 = (id) => {
  shoppingCart.removeItemFromCart(id);
  window.location.reload();
};

var minusall = (id) => {
  shoppingCart.removeItemFromCartAll(id);
  window.location.reload();
};

// Render Cart items
function renderCart() {
  const items = document.getElementById("cart-product-items");
  const defaultEmptyContent = document.getElementById("empty-cart");
  const cartWtOrders = document.getElementById("have-order");
  const cart = shoppingCart.listCart();

  if (!cart.length) {
    cartWtOrders.style.display = "none";
  }

  if (!items) {
    return;
  }

  // render ordered items in cart
  cart.forEach((item) => {
    defaultEmptyContent.style.display = "none";
    cartWtOrders.style.display = "block";

    const rowTemplate = `
          <div role="row" class="product-item table-content" data-item-id="${
            item.id
          }">
            <div role="cell" class="product-detail">
              <img
                class="product-img"
                src="${
                  item.img.includes("_small.jpg")
                    ? item.img
                    : item.img.replace(".jpg", "_small.jpg")
                }"
                alt="product-img"
              />
              <div class="product-name">
                <a href="#" class="item-name">${item.name}</a>
                <p class="item-color">${item.status}</p>
              </div>
            </div>
            <div role="cell" class="prod price">$${item.price}</div>
            <div role="cell" class="prod quantity">
              <div class="qtt">
                <div class="qtt-num" contenteditable="true">${
                  item.quantity
                }</div>
                <div id="qtt-increase" id="add1" onclick="add1(${item.id})">
                <i class="fa-solid fa-sort-up"></i>
              </div>
              <div id="qtt-decrease  id="minus1"" onclick="minus1(${item.id})">
                <i class="fa-solid fa-sort-down"></i>
              </div>
              </div>
            </div>
            <div role="cell"  class="prod total">$${
              item.price * item.quantity
            }</div>
            <div role="cell" class="prod option">
              <i onclick="minusall(${item.id})" class="fa-solid fa-xmark"></i>
            </div>
          </div>`;
    let itemElement = document.createElement("div");
    itemElement.setAttribute("id", "rowcl");
    items.appendChild(itemElement);
    itemElement.outerHTML = rowTemplate.trim();
  });
}

setTimeout(function () {
  let cartIconBtn = document.getElementById("cartIconBtn");
  // add event to show Cart page when click cart Icon

  cartIconBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (user.isAuthenticate()) {
      window.location.href = "/pages/cart/cart.html";
    } else {
      document.getElementById("id01").style.display = "block";
    }
  });

  renderCart();

  document.getElementById(
    "cartTotal"
  ).innerHTML = `$ ${shoppingCart.totalCart()}`;
}, 100);
