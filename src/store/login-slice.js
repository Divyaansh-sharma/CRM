import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.error = null;
      state.isLoading = false;
    },
    loggingIn(state) {
      state.isLoading = true;
    },
    showErrorNotification(state, action) {
      console.log("action ==>", action);
      state.isLoading = false;
      state.error = {
        isError: true,
        message: action.payload,
      };
    },
    loggedIn(state, action) {
      console.log("lets check payload now ==>", action);
      state.isLoading = false;
      state.token = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
