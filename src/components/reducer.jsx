import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: true };
    }
    case "DISPLAY__CARTS": {
      return { ...state, cart: action.payload, loading: false };
    }
    case "CLEAR__CART": {
      return { ...state, cart: [] };
    }
    case "REMOVE": {
      const filterCart = state.cart.filter((cart) => {
        return cart.id !== action.payload;
      });
      return { ...state, cart: filterCart };
    }
    case "AMOUNT": {
      let filterAmount = state.cart
        .map((cart) => {
          if (cart.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...cart, amount: cart.amount + 1 };
            }
            if (action.payload.type === "dec") {
              return { ...cart, amount: cart.amount - 1 };
            }
          }
          return cart;
        })
        .filter((cart) => cart.amount > 0);

      return { ...state, cart: filterAmount };
    }
    case "REDUCE": {
      let { totalPrice, amount } = state.cart.reduce(
        (total, cart) => {
          const { price, amount } = cart;
          const sumprice = price * amount;

          total.totalPrice += sumprice;
          total.amount += amount;

          return total;
        },
        {
          totalPrice: 0,
          amount: 0,
        }
      );
      totalPrice = parseFloat(totalPrice.toFixed(2));
      return { ...state, amount, total: totalPrice };
    }
  }
  return state;
}

export default reducer;
