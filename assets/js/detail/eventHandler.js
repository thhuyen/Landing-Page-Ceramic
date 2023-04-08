//----------- Add to Cart - Trinh ----------
let products = [];
fetch(apiProducts)
  .then((response) => response.json())
  .then((ps) => {
    products = ps;
  })
  .catch((error) => {
    throw new Error(error);
  });

// Add event add to cart for products 
$(".btn-add_cart").onclick = function () {
  const id = localStorage.getItem("selectId");
  if (!id) {
    alert("You haven't selected any items yet!!");
    return;
  }
  let item = products.find((product) => product.id === id);
  if (!item) {
    console.error("Item is not existed!!");
    return;
  }
  shoppingCart.addItemToCart({ ...item, quantity: 1 });
  alert("Item is added successfully!!");
};
// -------------------------------------

// --------------- Huyen ---------------
// increase or descrease volume of product
$(".increase_volume").onclick = function () {
  $(".volume").innerText = +$(".volume").innerText + 1;
};
$(".decrease_volume").onclick = function () {
  let volume = +$(".volume").innerText;
  if (volume > 1) $(".volume").innerText = volume - 1;
};

// create random id
const createIdGenerator = () => {
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

// set date for comments
const date = new Date();
let month;
switch (date.getMonth() + 1) {
  case 1:
    month = "Jan";
    break;
  case 2:
    month = "Feb";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "Aug";
    break;
  case 9:
    month = "Sep";
    break;
  case 10:
    month = "Oct";
    break;
  case 11:
    month = "Nov";
    break;
  default:
    month = "Dec";
}

// after replying or sending, localStorage will update
const updateCmtArr = (newComment) => {
  localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
  location.reload();
};

// handle press button clear
$("#permanent_clearbtn").onclick = () => {
  $("#permanent_inputleavecmt").value = "";
};

// handle press send on top
$("#permanent_sendbtn").onclick = () => {
  const newComment = {
    id: createIdGenerator(),
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCI6D-EkL1058Fnk2RliFP17INDLXdmVG_0Q&usqp=CAU",
    content: $("#permanent_inputleavecmt").value,
    date: month + " " + date.getDate() + ", " + date.getFullYear(),
    username: "Alexander",
    level: 1,
    nearest_parent: null,
  };

  // variable comments in render.js (detail folder), line 47
  if (comments) {
    updateCmtArr(newComment);
  }
};

// handle when clicking reply text
const replyComment = (reply) => {
  const data = $$(".leave_comment");

  // check if there's no any input to write comment so that create a new one
  // if it exists, no creating new one
  if (!data.length) {
    const input = `<textarea class="input-leave_cmt input-leave_cmt-reply" placeholder="Write something..." cols="50" rows="1"></textarea>
        <button class="btn btn-leave_cmt transition" onclick="handleComment(this)">Send</button>
        <button class="btn btn-leave_cmt transition" onclick="handleCancel(this)">Cancel</button>`;
    render(
      reply.parentElement,
      "div",
      "leave_comment",
      null,
      input,
      null,
      null
    );

    // make the line space between 2 elements, because the box to write comment has absolute position,
    // it's overided by below element which is created after that
    render(reply.parentElement, "div", null, "space_cmt", null, null);
    $("#space_cmt").style.height = "50px";
  }
};

// handle cancel button
const handleCancel = (button) => {
  button.parentElement.parentElement.removeChild(
    button.parentElement.nextElementSibling
  );
  button.parentElement.parentElement.removeChild(button.parentElement);
};

// handle send button
const handleComment = (button) => {
  let parent = button.parentElement;
  let count = 0;
  // count how many level from element standing
  while (parent.className.slice(0, 14) != "comment-parent") {
    parent = parent.parentElement;
    count++;
  }

  // create new comments with some constraints
  const content_cmt = $(".input-leave_cmt-reply");

  // check if input comment is empty => no permit to send
  if (content_cmt.value) {
    const newComment = {
      id: createIdGenerator(),
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCI6D-EkL1058Fnk2RliFP17INDLXdmVG_0Q&usqp=CAU",
      content: content_cmt.value,
      date: month + " " + date.getDate() + ", " + date.getFullYear(),
      username: "Alexander",
    };

    if (count < 3) {
      newComment.level = 2;
      newComment.nearest_parent =
        button.parentElement.parentElement.parentElement.id;
    } else if (count === 3) {
      newComment.level = 3;
      newComment.nearest_parent =
        button.parentElement.parentElement.parentElement.id;
    } else {
      newComment.level = 3;
      newComment.nearest_parent =
        button.parentElement.parentElement.parentElement.parentElement.id;
    }

    updateCmtArr(newComment);
  }
};

// handle like comment
const handleLike = (icon_heart) => {
  icon_heart.classList.toggle("more_bold");
};

const hideCmts = () => {
  $(".nested_comments").style.height = "400px";
  $(".nested_comments").style.overflowY = "hidden";
  $(".hide_cmts").style.display = "none";
  $(".show_cmts").style.display = "block";
};

const showCmts = () => {
  $(".nested_comments").style.height = "max-content";
  $(".nested_comments").style.overflowY = "visible";
  $(".show_cmts").style.display = "none";
  $(".hide_cmts").style.display = "block";
};
if ($(".nested_comments").clientHeight > 400) {
  hideCmts();
}

$(".show_cmts").onclick = () => {
  showCmts();
};

$(".hide_cmts").onclick = () => {
  hideCmts();
};
