const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const banners = [
    {
        text1: 'Style Destination',
        text2: 'Basic Collection',
        text3: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. <br> Sunt qui esse pariatur duis deserunt',
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/files/s3.jpg?v=1662349994',
    },
    {
        text1: 'Style Destination',
        text2: 'New Collection',
        text3: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. <br> Sunt qui esse pariatur duis deserunt',
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/files/s4.jpg?v=1662349994',
    },    
]

banners.map((element, index) => {
    const div = document.createElement('div');
    div.className = `slider-imgs ${index == 0 ? 'active' : ''}`;
    div.style.cssText = `
        background-image: url(${element.img})
        `;
    div.innerHTML = 
    `<div class="slider-text-wrapper ${index % 2 == 0 ? "slider-text-wrapper-left" : "slider-text-wrapper-center"}">
        <h3 class="slider-text slider-text-first">${element.text1}</h3>
        <h3 class="slider-text slider-text-second">${element.text2}</h3>
        <h3 class="slider-text slider-text-third">${element.text3}</h3>
        <button class="btn slider-btn">SHOP NOW</button>
    </div>`;

    const dot = document.createElement('i');
    dot.id = `dot-${index};`
    dot.className = index == 0 ? 'fa-solid fa-circle icon icon-dot' : 'fa-regular fa-circle icon icon-dot';
    dot.setAttribute('onclick','handleChangeSlide(this)');
    
    $('.dots').append(dot);
    $('#slider').append(div);
})

const bestSellerProduct = [
    {
        name: 'Smooth Disc',
        price: 19,
        discount_percent: 16,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/8.1.jpg?v=1662001004'
    },
    {
        name: 'Pattern Plate',
        price: 18,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/9.1.jpg?v=1662001001'
    },
    {
        name: 'Modern Cup',
        price: 18,
        discount_percent: 12,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/7.1.jpg?v=1662001011'
    },
    {
        name: 'Large Ceramic Vase',
        price: 23,
        discount_percent: 12,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/13.1.jpg?v=1662000995'
    },
    {
        name: 'Elephant-Shaped',
        price: 20,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/13.1.jpg?v=1662000995'
    },
    {
        name: 'Decorative Clocks',
        price: 16,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/12.1.jpg?v=1662000996'
    },
    {
        name: 'Decorative Ceramic Vase',
        price: 18,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/14.1.jpg?v=1662000993',
    },
    {
        name: 'Decorative Ball',
        price: 18,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/11.1.jpg?v=1662000998'
    }
]

bestSellerProduct.map((element, index) => {
    const div = document.createElement('div');
    div.className = 'product_bestsl';
    div.innerHTML = 
    `<a href="">
        <img src="${element.img}" alt="product" class="img-product">
    </a>
    <a href="" class="product_name remove_style_link">${element.name}</a> <br>
    <span class="price origin_price ${element.discount_percent ? 'discount' : ''}">$${element.price}.00</span>
    ${element.discount_percent ? 
        `<span class="price discount_price">$${Math.round(element.price*((100 - element.discount_percent)/100))}.00</span>
        <div class="discount_percent">-${element.discount_percent}%</div>` : ''}
    <div class="actions">
        <div class="action">
            <i class="fa-solid fa-bag-shopping icon icon-action"></i>
            <div class="tooltip">Add to Cart</div>
        </div>
        <div class="action">
            <i class="fa-solid fa-magnifying-glass transition icon icon-action"></i>
            <div class="tooltip">Quickiew</div>
        </div>
        <div class="action">
            <i class="fa-regular fa-heart transition icon icon-action"></i>
            <div class="tooltip">Add to Wishlist</div>
        </div>
    </div>`
    $('.products_bestsl').append(div);
})