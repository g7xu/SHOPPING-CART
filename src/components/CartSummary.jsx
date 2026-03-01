import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './CartSummary.css';

const CartSummary = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);


  return (
    <div className="cart-summary">
      <h3 className="cart-summary-text">Total Items: {totalQuantity}</h3>
      <h3 className="cart-summary-text">Total Price: {totalPrice.toFixed(2)}</h3>

      <Link to="/cart" className="cart-link">
        Go to Cart
      </Link>
    </div>
  );
};

export default CartSummary;
