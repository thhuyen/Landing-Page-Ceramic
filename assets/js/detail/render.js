fetch(apiProducts) 
    .then (response => response.json())
    .then (products => {
        const bestSellerProduct = products.filter(e => e.type === "best seller");
        // render related products
        for(let i = 0 ; i < 4; i++) {
            render($('.products-related'), 'div', 'product_bestsl', null, setHTMLProduct(bestSellerProduct[i]), null, null)
        }
    })
    .catch (error => {throw new Error(error)})


// img product 
render($('#in4_product'), 'img', 'img-slider' ,null, null, null);
$('.img-slider').src = localStorage.getItem("productImg");

// information product
render($('#in4_product'), 'div', 'desc_product', null, 
    `<h2 class="name_product">${localStorage.getItem("productName")}</h2>
    ${localStorage.getItem("productDiscount") ? 
        `<span class="price origin_price discount">${localStorage.getItem("productPrice")} USD</span>
        <span class="price discount_price"> &nbsp; ${localStorage.getItem("productDiscount")} USD</span>` : 
        `<span class="price discount_price"> &nbsp; ${localStorage.getItem("productPrice")} USD</span>` }
    <p class="desc_detail">
        Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...
    </p>
    <div class="more_actions">
        <p class="more_action">Size guide</p>
        <p class="more_action">Size Delivery & Return</p>
        <p class="more_action">Ask a Question</p>
    </div>
    <div class="option-wrapper">
        <div class="change_volume">
            <div class="volume">1</div>
            <div class="increase_volume">
                <i class="fa-solid fa-sort-up"></i>
            </div>
            <div class="decrease_volume">
                <i class="fa-solid fa-sort-down"></i>
            </div>
        </div>
        <button class="btn btn-add_cart transition">ADD TO CART</button>
    </div>
    <button class="btn btn-buy transition">BUY IT NOW</button>`, null, null)