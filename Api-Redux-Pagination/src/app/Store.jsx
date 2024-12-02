import { configureStore } from "@reduxjs/toolkit";
import apidata from "../Features0/Features";


export const store = configureStore({
    reducer: {
        apikey: apidata
    }
}

)
