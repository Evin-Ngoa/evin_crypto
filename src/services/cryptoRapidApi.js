
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiHeaders = {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};


const makeRequest = (url) => ({ url, headers: apiHeaders });

export const cryptoRapidApi = createApi({
    reducerPath: 'cryptoRapidApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => makeRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query: () => makeRequest('/exchanges'),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => makeRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => makeRequest(`coin/${coinId}/history/${timeperiod}`),
        }),
      }),
});

export const { 
    useGetCryptosQuery, 
    useGetCryptoDetailsQuery, 
    useGetExchangesQuery, 
    useGetCryptoHistoryQuery 
} = cryptoRapidApi;
