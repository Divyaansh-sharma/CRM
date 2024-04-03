import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProductsdata(state, action) {
      state.products = action.payload;
    },
    deletedProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    addProductInProductsData(state, action) {
      state.products = [action.payload, ...state.products];
    },
    updateProductInProductsData(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
