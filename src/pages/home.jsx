import { Link } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/getProduct"
      );

      setProducts(response.data.data);
    } catch (error) {
      console.log("Get Products Error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="product-card">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <p>{product.category}</p>
              <button>Add to Cart</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;