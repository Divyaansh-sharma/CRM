import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import productsSlice from "./products-slice";

const store = configureStore({
  reducer: {
    log: loginSlice.reducer,
    prod: productsSlice.reducer,
  },
});

export default store;
