import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  value2 : 1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    mul: (state) => {
        state.value2 *= 2
    }
   
  },
})


export const { increment, decrement, mul } = counterSlice.actions

export default counterSlice.reducer