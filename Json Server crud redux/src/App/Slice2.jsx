import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching user items
export const fetchUserItems = createAsyncThunk(
  'userItem/fetchUserItems',
  async () => {
    const response = await axios.get('http://localhost:5000/userItem');
    return response.data;
  }
);

// Async thunk for updating a user item
export const updateUserItem = createAsyncThunk(
  'userItem/updateUserItem',
  async (userProduct) => {
    const response = await axios.put(`http://localhost:5000/userItem/${userProduct.id}`, userProduct);
    return response.data;
  }
);

// Async thunk for adding a new user item
export const addUserItem = createAsyncThunk(
  'userItem/addUserItem',
  async (userProduct) => {
    const response = await axios.post('http://localhost:5000/userItem', userProduct);
    return response.data;
  }
);

// Async thunk for deleting a user item
export const deleteUserItem = createAsyncThunk(
  'userItem/deleteUserItem',
  async (id) => {
    await axios.delete(`http://localhost:5000/userItem/${id}`);
    return id;
  }
);

const userItemSlice = createSlice({
  name: 'userItem',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateUserItem.fulfilled, (state, action) => {
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(addUserItem.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteUserItem.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      });
  },
});

export default userItemSlice.reducer;
