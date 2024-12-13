import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import userItemReducer from './userItemSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    userItem: userItemReducer,
  },
});

export default store;
