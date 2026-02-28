import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem.jsx';
import CartSummary from '../components/CartSummary.jsx';
import instance from '../interceptors/auth.interceptor.js';
import './ProductList.css';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    instance.get('/products')
      .then(res => setProducts(res.data.products ?? []))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);


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
