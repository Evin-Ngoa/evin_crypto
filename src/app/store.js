import { configureStore } from '@reduxjs/toolkit';

import { cryptoRapidApi } from '../services/cryptoRapidApi'
import { cryptoNewsRapidApi } from '../services/cryptoNewsRapidApi'

export default configureStore({
    reducer: {
        [cryptoRapidApi.reducerPath]: cryptoRapidApi.reducer,
        [cryptoNewsRapidApi.reducerPath]: cryptoNewsRapidApi.reducer,
    },
});