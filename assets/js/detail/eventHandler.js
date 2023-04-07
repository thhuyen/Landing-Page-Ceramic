$(".increase_volume").onclick = function () {
  $(".volume").innerText = +$(".volume").innerText + 1;
};
$(".decrease_volume").onclick = function () {
  let volume = +$(".volume").innerText;
  if (volume > 1) $(".volume").innerText = volume - 1;
};

var products = [];
fetch(apiProducts)
  .then((response) => response.json())
  .then((ps) => {
    products = ps;
  })
  .catch((error) => {
    throw new Error(error);
  });

//   Add to Cart - Trinh
$(".btn-add_cart").onclick = function () {
  var r = Math.floor(Math.random() * products.length);

  const id = localStorage.getItem("selectId");
  if (!id) {
    alert("not select item yet");
    return;
  }
  var item = products.find((product) => product.id === id);
  if (!item) {
    console.error("item not existed");
    return;
  }
  shoppingCart.addItemToCart({ ...item, quantity: 1 });
  alert("Item add successfully");
};
