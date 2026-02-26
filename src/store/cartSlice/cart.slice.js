import { createSlice } from '@reduxjs/toolkit';
// TODO: Implement the reducers to handle cart operations
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    removeItemFromCart(state, action) {},
    clearCart: (state) => {},
  },
});

export const {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
