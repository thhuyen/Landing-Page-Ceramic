// Restrict that only user logged in to see this page
if (!user.isAuthenticate()) {
  alert("You must login to view this page !!");
  window.location.href = "/pages/home.html";
}

let container = document.getElementById("product-container");
let currentCartList = shoppingCart.listCart();
const productBought = JSON.parse(localStorage.getItem("productBought"));

(function () {
  let priceWrapper = document.getElementById("price-wrapper");
  let subtotal = Math.round(shoppingCart.totalCart());
  let tax = productBought ? +productBought.price* 0.1 : subtotal *0.1;
  let sum = productBought ? (+productBought.price*+productBought.quantity + tax ): (subtotal + tax);
  if (productBought) {
    productBought.total = sum;
    localStorage.setItem("productBought",JSON.stringify(productBought));
  }

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
    container.appendChild(div);
}
  //   Render each item in Cart
else {
  currentCartList.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="item${item.id}">
    <div id="product-info">
     <div class="product-wrap ">
<div class="product-img">
  <img
    src=${item.img}
    alt="product"
  />
  <div class="product-quantity">${item.quantity}</div>
</div>
<span class="product-name"> ${item.name} </span>
</div>
<span class="price">$ ${item.price}</span></div>
          <hr />
`;
    container.appendChild(div);
  });

}
  //Render fee & total price
  priceWrapper.innerHTML = `<div class="calculate-price">
<div class="fee">
  <p>Subtotal</p>
  <p>$ ${productBought ? (+productBought.price * productBought.quantity).toFixed(2) : subtotal.toFixed(2)}</p>
</div>
<div class="fee">
  <p>Shipping</p>
  <p class="text">Calculated at next step</p>
</div>
<div class="fee">
  <div class="taxes">
    <p>Estimated taxes</p>
    <div class="tooltip">
      <i class="fa-regular fa-circle-question"></i>
      <span class="show-tooltip">
        The taxes and total will be confirmed via email after you
        order.
      </span>
    </div>
  </div>
  <p>$ ${tax.toFixed(2)}</p>
</div>
</div>
<hr />
<div class="total">
<span class="total-label">
  <b>Total</b>
</span>
<p class="text">
  USD<span class="total-price"><b> $ ${sum.toFixed(2)}</b> </span>
</p>
</div>`;
})();

// Add event for Submit Button to validate and redirect to next process
let submitBtn = document.getElementById("submitInfoCart");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  continueToShipping();
});
function loadPaymentInfoData() {
  const paymentInfo = shoppingCart.getPaymentInfo();
  console.log(shoppingCart.getPaymentInfo());
  if (paymentInfo.phone)
    document.getElementById("pm-phone").value = paymentInfo.phone;
  if (paymentInfo.email)
    document.getElementById("pm-email").value = paymentInfo.email;
  if (paymentInfo.firstname)
    document.getElementById("pm-name").value = paymentInfo.firstname;
  if (paymentInfo.address)
    document.getElementById("pm-address").value = paymentInfo.address;
}
loadPaymentInfoData();
function continueToShipping() {
  let phone = document.getElementById("pm-phone").value;
  let email = document.getElementById("pm-email").value;
  let fname = document.getElementById("pm-name").value;
  let address = document.getElementById("pm-address").value;
  let errMsg1 = document.getElementById("pm-info-error-msg1");
  let errMsg2 = document.getElementById("pm-info-error-msg2");
  var isSave = document.getElementById("save-info").checked;

  try {
    if (!phone || phone.length <= 9) {
      errMsg1.innerText =
        "Phone must be filled and required at least 10 digits!!!";
      return;
    }
    if (!email || email.length <= 10) {
      errMsg1.innerText =
        "Email must be filled and required at least 10 digits!!!";
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      errMsg1.innerText =
        "Please input a valid email !!(ex: abc@xyz.com, etc.)";
      return;
    }

    if (!fname) {
      errMsg2.innerText = "Your name is required!!";
      return;
    }

    if (!address) {
      errMsg2.innerText = "Your address is required!!";
      return;
    }
    shoppingCart.updatePaymentInfo(phone, email, fname, "", address, "notes");

    if (isSave) {
    }
    window.location.href = "/pages/payment/confirm-shipping.html";
  } catch (error) {
    console.log(error);
    alert("" + error);
  }
}

