import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const apifetch = createAsyncThunk('apifetch', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data; 
});

export const apidata = createSlice({
    name: 'apidata',
    initialState: {
        data: [],    
        loading: false, 
        error: null  
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(apifetch.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(apifetch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; 
            })
            .addCase(apifetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; 
            });
    }
});

export default apidata.reducer;
