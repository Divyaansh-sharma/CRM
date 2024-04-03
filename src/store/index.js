import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";

const store = configureStore({
  reducer: {
    log: loginSlice.reducer,
  },
});

export default store;
