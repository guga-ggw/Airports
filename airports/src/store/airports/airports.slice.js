import { createSlice } from "@reduxjs/toolkit"
import { getAirports } from "./airports.thunks"

const initialState = {
    Airports : [],
    loading : false,
    error : false
}

const airportsSlice = createSlice({
    name : "Airports",
    initialState,
    reducers : {
    },
    extraReducers : {
        [getAirports.fulfilled.type] : (state, action) => {
            console.log(action)
            state.Airports = action.payload
            state.loading = false
        },
        [getAirports.pending.type] : (state) => {
            state.loading = true
        },
        [getAirports.rejected.type] : (state) => {
            state.error = true,
            state.loading = false
        },
    }

    
})

export default airportsSlice.reducer