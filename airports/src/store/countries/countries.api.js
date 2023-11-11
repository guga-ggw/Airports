import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: 30,
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => 'all', 
      staleTime: 300000,
      refetchOnMountOrArgChange: 30,
      keepUnusedDataFor: 20
    }),
  }),
});

export const { useGetDataQuery } = api;