



// export const store = configureStore({
//     reducer: {
//         feature: fea

import { configureStore } from "@reduxjs/toolkit";
import featureSlice from "./FeatureSlice"
        
//     },
    
// });

export const store = configureStore({
    reducer:{
        feature : featureSlice.reducer
    }
})
