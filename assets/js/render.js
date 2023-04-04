const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const apiProducts = 'http://localhost:3000/products';

function render (parent, typeTag, className, id,  HTML, attribute, css) {
    const element = document.createElement(typeTag);
    if (className)
        element.className = className;
    if (id)
        element.id = id;
    if (css)
        element.style.cssText = css;
    if (attribute) 
        element.setAttribute(attribute.event, attribute.name);
    if (HTML)
        element.innerHTML = HTML;
    parent.append(element);
}

function setHTMLProduct(element) {
    const HTML = `<a href="./detail.html" target="_blank" onclick="saveInfor(this)">
        <img src="${element.img}" alt="product" class="img-product">
    </a>
    <a href="./detail.html" target="_blank" class="product_name remove_style_link" onclick="saveInfor1(this)">${element.name}</a> <br>
    <span class="price origin_price ${element.discount_percent ? 'discount' : ''}">$${element.price}.00</span>
    ${element.discount_percent ? 
        `<span class="price discount_price">$${Math.round(element.price*((100 - element.discount_percent)/100))}.00</span>
        <div class="discount_percent">-${element.discount_percent}%</div>` : ''}
    <div class="actions">
        <div class="action">
            <i class="fa-solid fa-bag-shopping icon icon-action"></i> 
        </div>
        <div class="action">
            <i class="fa-solid fa-magnifying-glass transition icon icon-action"></i> 
        </div>
        <div class="action">
            <i class="fa-regular fa-heart transition icon icon-action"></i>
        </div>
    </div>`
    return HTML;
}
