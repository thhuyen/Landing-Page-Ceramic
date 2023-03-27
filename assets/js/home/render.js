const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sliders = [
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
const newArrivalsProducts = [
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
const bestSellerProduct = [
    {
        name: 'Bulb Vase',
        price: 21,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/5.1.jpg?v=1662001020'
    },
    {
        name: 'Bud Vase',
        price: 20,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/6.1.jpg?v=1662001016'
    },
    {
        name: 'Ceramic Planter Pot',
        price: 18,
        discount_percent: 12,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/4.1.jpg?v=1662001013'
    },
    {
        name: 'Ceramic Teapot',
        price: 14,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/3.1.jpg?v=1662001008'
    },
    {
        name: 'Ceramic Bowl Vase',
        price: 14,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/2.1.jpg?v=1662001007'
    },
    {
        name: 'Blown Spray Vase',
        price: 19,
        discount_percent: 16,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/1.1.jpg?v=1662001005'
    },
    {
        name: 'Decorative Ball',
        price: 18,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/10.1.jpg?v=1662000999',
    },
    {
        name: 'Decorative Ceramic Vase',
        price: 18,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/11.1.jpg?v=1662000998'
    }
]
const topRateProducts = [
    {
        name: 'Bulb Vase',
        price: 21,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/4.1.jpg?v=1662001013'
    },
    {
        name: 'Bud Vase',
        price: 20,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/7.1.jpg?v=1662001011'
    },
    {
        name: 'Ceramic Planter Pot',
        price: 18,
        discount_percent: 12,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/3.1.jpg?v=1662001008'
    },
    {
        name: 'Ceramic Teapot',
        price: 14,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/10.1.jpg?v=1662000999'
    },
    {
        name: 'Ceramic Bowl Vase',
        price: 14,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/11.1.jpg?v=1662000998'
    },
    {
        name: 'Blown Spray Vase',
        price: 19,
        discount_percent: 16,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/13.1.jpg?v=1662000995',
    },
    {
        name: 'Decorative Ball',
        price: 18,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/12.1.jpg?v=1662000996'
    },
    {
        name: 'Decorative Ceramic Vase',
        price: 18,
        discount_percent: null,
        img: '//cdn.shopify.com/s/files/1/0660/1985/2535/products/14.1.jpg?v=1662000993'
    }
]

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
    const HTML = `<a href="">
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
    return HTML;
}

// render slider
sliders.map((element, index) => {
      sliderHTML = 
    `<div class="slider-text-wrapper ${index % 2 == 0 ? "slider-text-wrapper-left" : "slider-text-wrapper-center"}">
        <h3 class="slider-text slider-text-first">${element.text1}</h3>
        <h3 class="slider-text slider-text-second">${element.text2}</h3>
        <h3 class="slider-text slider-text-third">${element.text3}</h3>
        <button class="btn btn-slider">SHOP NOW</button>
    </div>`;

    render($('.dots'), 
            'i', 
            index == 0 ? 'fa-solid fa-circle icon icon-dot' : 'fa-regular fa-circle icon icon-dot',
            `dot-${index}`,
            null,
            {event: 'onclick', name: 'handleChangeSlide(this)'},
            null);

    render($('#slider'),
            'div',
            `slider-imgs ${index == 0 ? 'active_block' : ''}`, 
            null, 
            sliderHTML, 
            null, 
            `background-image: url(${element.img})`);
})

// render new arrivals
newArrivalsProducts.map((element) => {
    render($('#new_arrivals'), 'div', 'product_bestsl', null, setHTMLProduct(element), null, null)
});

// render best sellers
bestSellerProduct.map((element) => {
    render($('#best_sellers'), 'div', 'product_bestsl', null, setHTMLProduct(element), null, null)
})

// render top rates
topRateProducts.map((element) => {
    render($('#top_rates'), 'div', 'product_bestsl', null, setHTMLProduct(element), null, null)
})

// render top deals 
for(let i = 0 ; i < 4; i++) {
    render($('.products-hotdeal'), 'div', 'product_bestsl', null, setHTMLProduct(bestSellerProduct[i]), null, null)
}