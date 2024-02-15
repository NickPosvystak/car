import { createAsyncThunk } from '@reduxjs/toolkit';

import { allCars } from 'services/api';

export const fetchCars = createAsyncThunk('cars/car', async (_, thunkApi) => {
  try {
    const cars = await allCars();
    return cars;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
