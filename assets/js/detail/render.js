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
$('.img-slider').src = localStorage.getItem("productImg") ? localStorage.getItem("productImg") : '//cdn.shopify.com/s/files/1/0660/1985/2535/products/7.1.jpg?v=1662001011';

// information product
render($('#in4_product'), 'div', 'desc_product', null, 
    `<h2 class="name_product">${localStorage.getItem("productName") ? localStorage.getItem("productName") : 'Modern Cup'}</h2>
    ${localStorage.getItem("productDiscount") ? 
        `<span class="price origin_price discount">${localStorage.getItem("productPrice") ? localStorage.getItem("productPrice") : '18.00'} USD</span>
        <span class="price discount_price"> &nbsp; ${localStorage.getItem("productDiscount") ? localStorage.getItem("productDiscount") : '16.00'} USD</span>` : 
        `<span class="price discount_price"> &nbsp; ${localStorage.getItem("productPrice") ? localStorage.getItem("productPrice") : '16.00'} USD</span>` }
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
    <a href="../../../pages/payment/input-info.html">
        <button class="btn btn-buy transition">BUY IT NOW</button>
    </a>`, null, null);

// render comments
const comments = JSON.parse(localStorage.getItem("comments"));

if (comments) {
    // create structure of comments
    const createComments = (img, username, date, content) => {
        return `<img src="${img}" alt="user_avatar" class="avatar">
                <div class="comment-right comment-right-parent">
                    <span class="comment-user_name">${username}</span>
                    <span class="comment-datetime">${date}</span>
                    <p class="comment-content">${content}</p>
                    <span class="comment-reply" onclick="replyComment(this)">Reply &nbsp;&nbsp;&nbsp;</span>
                    <i class="fa-regular fa-heart icon icon-love_comment" onclick="handleLike(this)"></i>
                </div>`
    }
    
    // render comment in level 1
    comments.map(comment => {
        if (comment.level === 1) {
            render($('.nested_comments'), 'div' ,'comment-parent comment', comment.id , createComments(comment.avatar, comment.username, comment.date, comment.content), null, null);
        }    
    });
    
    // render all child comments
    const handleCreateChildComments = (parent, child) => {
        for (let i in parent) {
            for (let j in child) {
                if(child[j].nearest_parent === parent[i].id) {
                    let className = child[j].level === 2 ? "comment comment-child comment-child-level2" : "comment comment-child comment-child-level3";
                    render(parent[i], 'div', className, child[j].id, createComments(child[j].avatar, child[j].username, child[j].date, child[j].content), null, null);
                }
            }
        }
    }
    
    // filter comments with specific levels
    const level2 = comments.filter(comment => comment.level === 2);
    const level3 = comments.filter(comment => comment.level === 3);
    
    handleCreateChildComments([...$$('.comment-parent')], level2)
    handleCreateChildComments([...$$('.comment-child-level2')], level3)
}
else {
    localStorage.setItem("comments", JSON.stringify([]));
    location.reload();
}

// render current page
$('.current_page').textContent = localStorage.getItem("productName") ? localStorage.getItem("productName") : 'Mordern Cup';