import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    isSubmitting: false,
    formErrorMessage: "",
    isDeleting: null,
  },
  reducers: {
    gettingProducts(state) {
      state.isLoading = true;
    },
    addProductsdata(state, action) {
      state.products = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    deletedProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.isDeleting = null;
    },
    addProductInProductsData(state, action) {
      state.products = [action.payload, ...state.products];
      state.isSubmitting = false;
    },
    updateProductInProductsData(state, action) {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      state.isSubmitting = false;
    },
    showErrorNotification(state, action) {
      state.isLoading = false;
      state.error = {
        isError: true,
        message: action.payload,
      };
    },
    formSubmitting(state) {
      state.isSubmitting = true;
    },
    formSubmissionFailed(state, action) {
      state.formErrorMessage = action.payload;
      state.isSubmitting = false;
    },
    deletingProduct(state, action) {
      state.isDeleting = {
        deleting: true,
        id: action.payload,
      };
    },
    deletionFailed(state) {
      state.isDeleting = null;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
