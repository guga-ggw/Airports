import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    countries : [],
    loading : false,
    error : false,
    currentCountry : ""
}

const countriesSlice = createSlice({
    name : "countries",
    initialState,
    reducers : {
        setcountries : (state, action) => {
            state.countries = action.payload
        },
        setcurrent : (state, action) => {
            state.currentCountry = action.payload
        }
    },
    
})

export const {setcountries, setcurrent} = countriesSlice.actions
export default countriesSlice.reducer