import React, { useState } from 'react';
import ProductItem from '../components/ProductItem.jsx';
import CartSummary from '../components/CartSummary.jsx';
import './ProductList.css';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Fetch the product list from an API
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Products</h2>
      <CartSummary />
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
