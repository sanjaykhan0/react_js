import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apifetch = createAsyncThunk('apifetch', async () => {
    try {
        const response = await axios.get('http://localhost:5000/Data');
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

const featureSlice = createSlice({
    name: 'feature',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(apifetch.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(apifetch.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(apifetch.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default featureSlice.reducer;
