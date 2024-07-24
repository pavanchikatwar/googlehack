import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <header>
        <h1>Welcome to My Marketplace</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>Your one-stop shop for unique products!</p>
        </section>
        <section id="products">
          <h2>Products</h2>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProductList searchTerm={searchTerm} />
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Marketplace</p>
      </footer>
    </div>
  );
}

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

function ProductList({ searchTerm }) {
  const products = [
    { name: 'Product 1', price: '$10' },
    { name: 'Product 2', price: '$20' },
    { name: 'Product 3', price: '$30' },
    { name: 'Amazing Product', price: '$25' },
    { name: 'Unique Item', price: '$15' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message!');
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default App;
