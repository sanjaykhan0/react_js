import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './Slice'

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export default store;
