import { createSlice } from "@reduxjs/toolkit"
import { getCurrencies } from "./currencies.thunks"

const initialState = {
    currencies : [],
    loading : false,
    error : false
}

const CurrenciesSlice = createSlice({
    name : "Currencies",
    initialState,
    reducers : {
    },
    extraReducers : {
        [getCurrencies.pending.type] : (state) => {
            state.loading = true
        },
        [getCurrencies.fulfilled.type] : (state, action) => {
            state.loading = false
            state.error = false
            state.currencies = action.payload
        },
        [getCurrencies.pending.type] : (state) => {
            state.loading = false,
            state.error = true
        },
    }

    
})

export default CurrenciesSlice.reducer