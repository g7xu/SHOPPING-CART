import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from '../store/cartSlice/cart.slice';
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const getProductQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);

    if (item) {
      return item.quantity;
    } else {
      return 0;
    }
  };

  const handleAdd = () => {
    dispatch(
      increaseItemQuantity({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail ?? ''
      })
    );
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity({ id : product.id }))
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
          <button onClick = {handleDecrease} className="quantity-button remove-button">-</button>
          <p className="quantity-text">
            Quantity: {getProductQuantity(product.id)}
          </p>
          <button onClick = {handleAdd} className="quantity-button add-button">+</button>
        </div>
      ) : (
        <button onClick = {handleAdd} className="add-to-cart-button">Add to Cart</button>
      )}
    </li>
  );
};

export default ProductItem;
