import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    countries : [],
    loading : false,
    error : false
}

const countriesSlice = createSlice({
    name : "countries",
    initialState,
    reducers : {
        setcountries : (state, action) => {
            state.countries = action.payload
        }
    },
    
})

export const {setcountries} = countriesSlice.actions
export default countriesSlice.reducer