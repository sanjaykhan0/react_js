

import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './FeatureSlice';

export const store = configureStore({
    reducer: {
        feature: featureReducer,
    },
});
