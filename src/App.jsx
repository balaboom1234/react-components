import "./App.css";

function Button() {
  return (
    <button className="add-to-cart-button-secondary">Add to Cart</button>
  );
}

// ✅ Header
function Header() {
  return (
    <header>
      <nav>
        <div className="logo">🚀 XYZ CORP</div>
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <div className="company-detail-left">
        <h1>Welcome to XYZ Corp</h1>
        <p>Your Trusted Partner in Excellence</p>
        <img src="https://placehold.co/300x300" />
      </div>
      <div className="company-detail-right">
        <h2>About Our Company</h2>
        <p>
          Welcome to XYZ Corp, where excellence meets innovation...
        </p>
        <p>
          Our mission is to empower businesses through cutting-edge technology...
        </p>
        <p>
          At XYZ Corp, we take pride in our commitment...
        </p>
        <button className="learn-button">Learn More</button>
      </div>
    </main>
  );
}

function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-featured-heading">Featured Products</h2>
        <div className="product-card-list">
          <div className="product-card">
            <img src="https://placehold.co/300x300" alt="Product 1" />
            <h3>Premium Bluetooth Headphones</h3>
            <p className="product-price">2,400 Baht</p>
            <Button /> {/* จุดที่ 1 */}
          </div>
          <div className="product-card">
            <img src="https://placehold.co/300x300" alt="Product 2" />
            <h3>Classic Leather Watch</h3>
            <p className="product-price">4,000 Baht</p>
            <Button /> {/* จุดที่ 2 */}
          </div>
          <div className="product-card">
            <img src="https://placehold.co/300x300" alt="Product 3" />
            <h3>Organic Green Tea</h3>
            <p className="product-price">79.99 Baht</p>
            <Button /> {/* จุดที่ 3 */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;