import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../feature/CounterSlice'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer

  },
})