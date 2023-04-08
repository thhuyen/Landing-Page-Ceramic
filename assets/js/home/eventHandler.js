const findActive = (type, name, name_replace) => {
  if (Array.isArray(type)) {
    const list = type.filter((e) => e.className.includes(name));
    list[0].className = list[0].className.replace(name, name_replace);
  } else {
    type.className = type.className.replace(name, name_replace);
  }
};

const handleChangeSlide = (dot) => {
  if (dot.className.includes("solid"));
  else {
    findActive([...$$(".icon-dot")], "solid", "regular");
    findActive([...$$(".slider-imgs")], "active_block", "");
    findActive(dot, "regular", "solid");
    $$(".slider-imgs")[+dot.id.slice(4, 5)].classList.add("active_block");
  }
};

const handleChangeTabs = (button) => {
  findActive([...$$(".btn-bestsl")], "active_color", "");
  button.classList.add("active_color");
  findActive([...$$(".products-main")], "active_grid", "");
  $$(".products-main")[+button.className.slice(26, 27)].classList.add(
    "active_grid"
  );
};

const handleToNext = (icon_next) => {
  let leftItem = +localStorage.getItem("leftItem") + 1;
  let rightItem = +localStorage.getItem("rightItem") + 1;

  if (rightItem < $$(".carousel-item").length)
    renderCarouselItem([...$$(".carousel-item")], leftItem, rightItem);
};

const handleToPrev = (icon_prev) => {
  let leftItem = +localStorage.getItem("leftItem") - 1;
  let rightItem = +localStorage.getItem("rightItem") - 1;

  if (leftItem >= 0)
    renderCarouselItem([...$$(".carousel-item")], leftItem, rightItem);
};

// handle accept cookies button
$(".btn-gotit").onclick = function () {
  this.parentElement.style.display = "none";
};

$(".btn-gotit").onclick = function () {
  this.parentElement.style.display = "none";
};

//handle add to cart button from product list - Trinh:
let products = [];
fetch(apiProducts)
  .then((response) => response.json())
  .then((ps) => {
    products = ps;
  })
  .catch((error) => {
    throw new Error(error);
  });

function addingToCart(id) {
  if (!id) {
    id = localStorage.getItem("selectId");
  }

  if (!id) {
    alert("You haven't selected any items yet!!");
    return;
  }
  let item = products.find((product) => product.id == id);
  if (!item) {
    console.error("Item is not existed!!");
    return;
  }
  shoppingCart.addItemToCart({ ...item, quantity: 1 });
  console.log(item.id);
  alert("Item is added successfully!!");
}
