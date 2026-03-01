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
    increaseItemQuantity(state, action) {
      const { id, title, price, thumbnail } = action.payload;

      const state_item = state.items.find((item) => id === item.id);

      if (!state_item) {
        state.items.push({
          id,
          title,
          price,
          thumbnail: thumbnail ?? '',
          quantity: 1,
        });
      } else {
        state_item.quantity += 1;
      }
      state.totalQuantity += 1;
      state.totalPrice += price;
    },
    decreaseItemQuantity(state, action) {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (idx === -1) return;

      state.totalQuantity -= 1;
      state.totalPrice -= state.items[idx].price;

      if (state.items[idx].quantity === 1) {
        state.items.splice(idx, 1);
      } else {
        state.items[idx].quantity -= 1;
      }
    },
    removeItemFromCart(state, action) {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (idx === -1) return;

      state.totalPrice -= state.items[idx].price * state.items[idx].quantity;
      state.totalQuantity -= state.items[idx].quantity;
      state.items.splice(idx, 1);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
