import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';
const ProductItem = ({ product }) => {
  // TODO: Implement the isProductInCart function.
  // TODO: Implement the getProductQuantity function.
  // TODO: Handle the onClick action for the add, remove, and "Add to Cart" buttons.

  const isProductInCart = (productId) => {
    return false;
  };

  const getProductQuantity = (productId) => {
    return 0;
  };

  return (
    <li className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <h3 className="product-title">{product.title}</h3>
      </Link>
      <p className="product-price">Price: ${product.price}</p>

      {isProductInCart(product.id) ? (
        <div className="product-quantity-container">
          <button className="quantity-button remove-button">-</button>
          <p className="quantity-text">
            Quantity: {getProductQuantity(product.id)}
          </p>
          <button className="quantity-button add-button">+</button>
        </div>
      ) : (
        <button className="add-to-cart-button">Add to Cart</button>
      )}
    </li>
  );
};

export default ProductItem;
