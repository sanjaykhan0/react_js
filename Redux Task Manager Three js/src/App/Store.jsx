import { configureStore } from "@reduxjs/toolkit";
import { taskslice } from "../Feature/TaskSlice";


export const store = configureStore({
    reducer:{
        taskslice: taskslice.reducer

    }
})