import { configureStore } from "@reduxjs/toolkit";
import { crudSlice } from "../feature/CrudSlice";


export const store = configureStore({
    reducer: {
        crudSlicekey: crudSlice
    }
})