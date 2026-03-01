import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import instance from '../interceptors/auth.interceptor';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    instance
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err?.message ?? 'Failed to load product'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <Link to="/ProductList" className="back-link">
        ← Back to Products
      </Link>
      <div className="product-detail-container">
        <h2>{product.title}</h2>
        <ProductItem key={product.id} product={product} />
        <div className="product-description">
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating} / 5
          </p>
          <p>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
          <p>
            <strong>Warranty Information:</strong> {product.warrantyInformation}
          </p>
          <p>
            <strong>Shipping Information:</strong> {product.shippingInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
