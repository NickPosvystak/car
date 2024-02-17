import { createAsyncThunk } from '@reduxjs/toolkit';

import { CarById, allCars } from 'services/api';

export const fetchCars = createAsyncThunk('cars/car', async (_, thunkApi) => {
  try {
    const cars = await allCars();
    return cars;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});


export const fetchCarById = createAsyncThunk('cars/car/:id', async (carId, thunkApi) => {
  try {
    const { data } = await CarById(carId);
    
    console.log('data: ', data);
    
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});


