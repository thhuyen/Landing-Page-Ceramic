// pass value to detail.html page
const storage = (img, name, discount) => {
    localStorage.setItem("productImg", img);
    localStorage.setItem("productName", name);
    if (discount.className.includes('discount')) {
        localStorage.setItem("productPrice", discount.innerText);
        localStorage.setItem("productDiscount", discount.nextElementSibling.innerText);
    }
    else {
        if (localStorage.getItem("productDiscount"))
            localStorage.removeItem("productDiscount");
        localStorage.setItem("productPrice", discount.innerText);
    }
    
}
const saveInfor1 = (product) => {
    storage(product.previousElementSibling.childNodes[1].src, product.innerText, product.nextElementSibling.nextElementSibling)
}
const saveInfor = (product) => {
    storage(product.childNodes[1].src, product.nextElementSibling.innerText, product.nextElementSibling.nextElementSibling.nextElementSibling)
}