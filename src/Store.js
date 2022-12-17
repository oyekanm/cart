import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/CartSlice";
import ModalReducer from "./Features/Modalslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: ModalReducer,
  },
});
