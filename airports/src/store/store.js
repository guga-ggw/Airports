import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countries.slice'; // Correct import statement
import { api } from './countries/countries.api';
import airportsSlice from './airports/airports.slice';
import currencies from './currencies/currencies';

export const store = configureStore({
  reducer: {
    countries: countriesReducer, 
    airports : airportsSlice,
    currencies ,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});