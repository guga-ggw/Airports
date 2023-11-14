import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrencies = createAsyncThunk(
    '/get/currencies',
    async(_, thunkApi) => {
        try {
            const res = await fetch('http://data.fixer.io/api/latest?access_key=41fac74e29a78d25fe377615b484fc53')
            const data = await res.json()
            if(data) return thunkApi.fulfillWithValue(data.rates)
        } catch (error) {
            return thunkApi.rejectWithValue('failed')
        }
    }
)