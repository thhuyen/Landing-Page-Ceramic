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
const carousel = [
    '//cdn.shopify.com/s/files/1/0660/1985/2535/files/instagram1.jpg?v=8226694471082303038',
    '//cdn.shopify.com/s/files/1/0660/1985/2535/files/instagram3.jpg?v=9285988590578980231',
    '//cdn.shopify.com/s/files/1/0660/1985/2535/files/instagram2.jpg?v=5951172637672660509',
    '//cdn.shopify.com/s/files/1/0660/1985/2535/files/instagram4.jpg?v=6820916875668538020',
    '//cdn.shopify.com/s/files/1/0660/1985/2535/files/instagram5.jpg?v=16229168583522440006',
    '//cdn.shopify.com/s/files/1/0660/1985/2535/files/instagram6.jpg?v=13170386306182762289',    
]

fetch (apiProducts)
    .then (response => response.json())
    .then (products => {
         // render new arrivals
        products.filter(e => e.status === "new").map((element) => {
                                render($('#new_arrivals'), 'div', 'product_bestsl', null, setHTMLProduct(element), null, null) 
                            });

        // render best sellers
        const bestSellerProduct = products.filter(e => e.type === "best seller");
        bestSellerProduct.map((element) => {
                                render($('#best_sellers'), 'div', 'product_bestsl', null, setHTMLProduct(element), null, null)
                            });

        // render top rates
        products.filter(e => e.rate === "high").map((element) => {
                                render($('#top_rates'), 'div', 'product_bestsl', null, setHTMLProduct(element), null, null)
                            });

        // render hot deals 
        for(let i = 0 ; i < 4; i++) {
            render($('.products-hotdeal'), 'div', 'product_bestsl', null, setHTMLProduct(bestSellerProduct[i]), null, null)
        }
    })
    .catch (error => {throw new Error(error)})
    
// render slider
sliders.map((element, index) => {
      sliderHTML = 
    `<div class="slider-text-wrapper ${index % 2 == 0 ? "slider-text-wrapper-left" : "slider-text-wrapper-center"}">
        <h3 class="slider-text slider-text-first">${element.text1}</h3>
        <h3 class="slider-text slider-text-second">${element.text2}</h3>
        <h3 class="slider-text slider-text-third">${element.text3}</h3>
        <a href ="#best_seller">
            <button class="btn btn-slider">SHOP NOW</button>
        </a>
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

// append carousels 
carousel.map((element) => {
        let HTML =  `<img class="img-carousel" src="${element}">
                        <div class="overlay-carousel">
                            <a href=""><i class="fa-brands fa-instagram icon icon-insta transition"></i></a>
                        </div>`
        render($('.carousel'), 'div', 'carousel-item', null, HTML, null, null)});

// render carousel
function renderCarouselItem(arr, start, end) {
    arr.map((element, index) => {
        if(index >= start && index <= end)
            element.classList.add('active_block');
        else {
            element.classList.remove('active_block');
        }
        localStorage.setItem("leftItem", start.toString());
        localStorage.setItem("rightItem", end.toString());
    })
}
// default render at first time
renderCarouselItem([...$$('.carousel-item')], 0, 4);


    