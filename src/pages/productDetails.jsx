import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/product/${id}`
        );

        console.log(response.data);

        setProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductById();
  }, [id]);

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <h2>₹{product.price, product.name}</h2>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductDetails;