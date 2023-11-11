import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import countriesSlice from "./countries/countries.slice";

const rootReducer = combineReducers({
    countries : countriesSlice,
    currency : {},
    airports : {},
})

export const store = configureStore({
    reducer : rootReducer
})