import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAirports = createAsyncThunk(
  '/get/airports',
  async (name, thunkAPI) => {
    try {
      const res = await fetch(`https://api.api-ninjas.com/v1/airports?country=${name}`, {
        method: 'GET',
        headers: { 'X-Api-Key': '5eaS05TUzV9b+C6jtN1dCA==YDVpapDlgXYs2W5y' }, 
      });

      const data = await res.json();

      if (res.ok) {
        return data;
      } else {
        return thunkAPI.rejectWithValue('Failed to fetch data');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);