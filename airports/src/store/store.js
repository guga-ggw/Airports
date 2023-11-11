import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countries.slice'; // Correct import statement
import { api } from './countries/countries.api';

export const store = configureStore({
  reducer: {
    countries: countriesReducer, // Use the correct reducer
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});