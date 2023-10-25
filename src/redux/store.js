import { configureStore, createReducer } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer,
  },
});
