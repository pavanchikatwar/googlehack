document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Product 1', price: 10.0 },
        { id: 2, name: 'Product 2', price: 20.0 },
        { id: 3, name: 'Product 3', price: 30.0 },
    ];

    const productsSection = document.getElementById('products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white p-4 rounded shadow';
        productCard.innerHTML = `
            <h2 class="text-xl font-bold">${product.name}</h2>
            <p class="text-gray-700">$${product.price.toFixed(2)}</p>
        `;
        productsSection.appendChild(productCard);
    });
});
