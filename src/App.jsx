import React from 'react';


const Button = () => {
  return (
    <button className="add-to-cart-button-secondary">
      Add to Cart
    </button>
  );
};


const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1>React App</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


const ProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-card">
        <h3>Running Shoes</h3>
        <p className="product-price">$90</p>
        <p className="product-category">Clothing</p>
        <Button />
      </div>
      <div className="product-card">
        <h3>Monitor</h3>
        <p className="product-price">$400</p>
        <p className="product-category">Electronics</p>
        <Button />
      </div>
      <div className="product-card">
        <h3>Keyboard</h3>
        <p className="product-price">$100</p>
        <p className="product-category">Electronics</p>
        <Button />
      </div>
    </section>
  );
};


const MainContent = () => {
  return (
    <main className="site-main">
      <h2>Products</h2>
      <ProductSection />
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; 2024 React Component Assignment</p>
    </footer>
  );
};


export default function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
