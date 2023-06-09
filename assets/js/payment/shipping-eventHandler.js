// Restrict that only user logged in to see this page
if (!user.isAuthenticate()) {
  alert("You must login to view this page !!");
  window.location.href = "/pages/home.html";
}

const loadPaymentInfo = function () {
  const paymentInfo = shoppingCart.getPaymentInfo();
  document.getElementById("email").innerText = paymentInfo.email;
  console.log(document.getElementById("shipto"));
  document.getElementById("shipto").innerText = paymentInfo.address;
};
loadPaymentInfo();

const productBought = JSON.parse(localStorage.getItem("productBought"));
let currentCartList = shoppingCart.listCart();
let shippingContainer = document.getElementById("shipping-container");
(function () {
  let priceWrapper = document.getElementById("shipIncludedPrice-wrapping");
  let subtotal = Math.round(shoppingCart.totalCart());
  let sum = productBought ? (+productBought.total) : (subtotal + subtotal * 0.1);

  // handle load data when no visiting cart page
if(productBought) {
  let div = document.createElement("div");
    div.innerHTML = `<div class="item${Math.random()}">
    <div id="product-info">
     <div class="product-wrap ">
      <div class="product-img">
      <img
        src=${productBought.img}
        alt="product"
      />
      <div class="product-quantity">${productBought.quantity}</div>
      </div>
      <span class="product-name"> ${productBought.name} </span>
      </div>
      <span class="price">$ ${productBought.price}</span></div>
                <hr />
`;
shippingContainer.appendChild(div);
}
else {
  //   Render each item in Cart
  currentCartList.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="item${item.id}">
      <div class="shipping-product-info">
              <div class="product-wrap">
                <div class="product-img">
                  <img
                    src=${item.img}
                    alt="product"
                  />
                  <div class="product-quantity">${item.quantity}</div>
                </div>
                <span class="product-name">${item.name}</span>
              </div>
              <span class="price">$ ${item.price}</span>
            </div>
            <hr />`;
    shippingContainer.appendChild(div);
  });

}

  //Render fee & total price
  priceWrapper.innerHTML = `<div class="calculate-price">
  <div class="fee">
    <p>Subtotal (Tax included)</p>
    <p>$ ${sum.toFixed(2)}</p>
  </div>
  <div class="fee">
    <p>Shipping</p>
    <p>$ 19.63</p>
  </div>
</div>
<hr />
<div class="total">
  <p class="total-label">
    <b>Total</b>
  </p>
  <p class="text">
    USD<span class="total-price"><b> $ ${(sum + 19.63).toFixed(2)}</b> </span>
  </p>
</div>`;
})();

let submitBtn = document.getElementById("shippingSubmitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/pages/payment/final-payment.html";
});

