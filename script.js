document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

// Sample product data
// const products = [
//     { name: 'Product 1', price: '$10' },
//     { name: 'Product 2', price: '$20' },
//     { name: 'Product 3', price: '$30' },
//     { name: 'Amazing product', price: '$50'}
// ];

// Display products
const productList = document.getElementById('product-list');
products.forEach(product => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p>`;
    productList.appendChild(div);
});

function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    event.target.reset();
}