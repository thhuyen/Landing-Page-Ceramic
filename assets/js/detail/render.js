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
]


// render related products
for(let i = 0 ; i < 4; i++) {
    render($('.products-related'), 'div', 'product_bestsl', null, setHTMLProduct(bestSellerProduct[i]), null, null)
}