// shop.js - Product loading and interactions

document.addEventListener('DOMContentLoaded', function () {
    // Example static products (replace with Firebase fetch later)
    const products = [
        {
            id: 'hair1',
            name: 'Floral Hair Clip',
            price: '₹199',
            image: 'https://via.placeholder.com/250x180?text=Hair+Clip',
            type: 'hair'
        },
        {
            id: 'jewel1',
            name: 'Pearl Earrings',
            price: '₹299',
            image: 'https://via.placeholder.com/250x180?text=Earrings',
            type: 'jewellery'
        },
        {
            id: 'combo1',
            name: 'Combo Set',
            price: '₹449',
            image: 'https://via.placeholder.com/250x180?text=Combo+Set',
            type: 'combo'
        }
    ];

    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <a href="product.html?id=${product.id}" class="shop-btn">View</a>
            `;
            productList.appendChild(card);
        });
    }

    // Product page logic (basic)
    const productDetail = document.getElementById('product-detail');
    if (productDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const product = products.find(p => p.id === id);
        if (product) {
            productDetail.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width:100%;border-radius:1rem;">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
            `;
            document.getElementById('buy-now').onclick = function() {
                alert('Buy Now clicked for ' + product.name);
            };
            document.getElementById('whatsapp-btn').href = `https://wa.me/?text=I want to buy ${encodeURIComponent(product.name)}`;
            document.getElementById('razorpay-btn').onclick = function() {
                alert('Razorpay payment for ' + product.name);
            };
        } else {
            productDetail.innerHTML = '<p>Product not found.</p>';
        }
    }
});
