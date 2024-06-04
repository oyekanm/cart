import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import cartItems from "../cartItems";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  loading: false,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkApi) => {
    try {
      console.log(thunkApi);
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    filterRemove: (state, action) => {
      const filter = state.cart.filter((cart) => cart.id !== action.payload);
      state.cart = filter;
    },
    toggleAmount: (state, { payload }) => {
      const { id, type } = payload;
      const amount = state.cart
        .map((cart) => {
          if (cart.id === id) {
            if (type === "inc") {
              return { ...cart, amount: cart.amount + 1 };
            }
            if (type === "dec") {
              return { ...cart, amount: cart.amount - 1 };
            }
          }
          return cart;
        })
        .filter((cart) => cart.amount > 0);

      state.cart = amount;

      // const amount = state.cart.find((cart) => cart.id === payload.id);
      // amount.amount += 1;
    },
    totals: (state) => {
      let { totalPrice, totalAmount } = state.cart.reduce(
        (total, cart) => {
          const { price, amount } = cart;
          const priceSum = price * amount;

          total.totalPrice += priceSum;
          total.totalAmount += amount;

          return total;
        },
        {
          totalPrice: 0,
          totalAmount: 0,
        }
      );

      return { ...state, total: totalPrice, amount: totalAmount };
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.loading = true;
    },

    [getCartItems.fulfilled]: (state, action) => {
      state.loading = false;
      // state.cart = action.payload;
      state.cart = cartItems;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
    },
  },
});

export const { clearCart, filterRemove, toggleAmount, totals } =
  cartSlice.actions;

export default cartSlice.reducer;
