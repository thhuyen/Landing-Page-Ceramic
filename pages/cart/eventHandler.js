// Restrict that only user logged in to see this page
if (!user.isAuthenticate()) {
  alert("You must login to view this page !!");
  window.location.href = "/pages/home.html";
}
if (localStorage.removeItem("productBought"))
  localStorage.removeItem("productBought");
// Increase / decrease quantity of a selected item

// button (+)
let add1 = (id) => {
  shoppingCart.addItemtoCart(id);
  window.location.reload();
};


//button (-)
let minus1 = (id) => {
  shoppingCart.removeItemFromQuantity(id);
  window.location.reload();
};

//button (X)
let minusall = (id) => {
  shoppingCart.removeItemRow(id);
  window.location.reload();
};

// function to click on the item Name
// and it will redirect to the detail product pages with full info of item
let seeDetail = (img, name, price, id) => {
  console.log(img, name, id);
  localStorage.setItem("selectId", id);
  localStorage.setItem("productImg", img);
  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);

  window.location.href = "/pages/detail.html";
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
  // render selected items in cart
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
                <a style="cursor:pointer" onclick="seeDetail('${item.img}','${
      item.name
    }',${item.price},${item.id})" class="item-name">${item.name}</a>
                
              </div>
            </div>
            <div role="cell" class="prod price">$${item.price}</div>
            <div role="cell" class="prod quantity">
              <div class="qtt">
                <div class="qtt-num" >${item.quantity}</div>
                <div id="qtt-increase" id="add1" onclick="add1(${item.id})">
                <i class="fa-solid fa-sort-up"></i>
              </div>
              <div id="qtt-decrease" id="minus1" onclick="minus1(${item.id})">
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

// using setTimeout to add event to show Cart page when click cart icon in header.
setTimeout(function () {
  let cartIconBtn = document.getElementById("cartIconBtn");
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
