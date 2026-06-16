import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const products = [
    { id: 1, name: "iPhone 15", price: "₹79,999" },
    { id: 2, name: "Nike Shoes", price: "₹4,999" },
    { id: 3, name: "Smart Watch", price: "₹2,999" },
    { id: 4, name: "JavaScript Book", price: "₹599" },
  ];
  return (
    <div className="home-container">
      <div className="navbar">
        <h2 className="nav-logo">🛍️ ShopSphere</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>

      <div className="hero-section">
        <h1 className="logo">🛍️ ShopSphere</h1>
        <p>Your One-Stop Online Shopping Destination</p>

        <input
          type="text"
          placeholder="Search Products..."
          className="search-bar"
        />
        <br />
        <button className="shop-btn">Shop Now</button>
      </div>

      <h2>Categories</h2>

      <div className="categories">
        <div className="category">📱 Electronics</div>
        <div className="category">👕 Fashion</div>
        <div className="category">👟 Shoes</div>
        <div className="category">📚 Books</div>
      </div>

      <h2>Products</h2>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
