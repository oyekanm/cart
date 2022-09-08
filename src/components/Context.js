import React, { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const currentState = {
  amount: 0,
  cart: [],
  total: 0,
  loading: false,
};
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, currentState);

  const clearCart = () => {
    dispatch({ type: "CLEAR__CART" });
  };
  const filterRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: "AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "REDUCE" });
  }, [state.cart]);

  const fetchCart = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY__CARTS", payload: cart });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        toggleAmount,
        filterRemove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
