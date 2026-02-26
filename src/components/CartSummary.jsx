import React from 'react';
import { Link } from 'react-router-dom';
import './CartSummary.css';

const CartSummary = () => {
  return (
    <div className="cart-summary">
      <h3 className="cart-summary-text">Total Items: {0}</h3>
      <h3 className="cart-summary-text">Total Price: {0}</h3>

      <Link to="/cart" className="cart-link">
        Go to Cart
      </Link>
    </div>
  );
};

export default CartSummary;
