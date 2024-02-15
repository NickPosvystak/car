import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const INITIAL_STATE = {
  cars: {
    item: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: INITIAL_STATE,
  reducers: {
    filterCars(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, state => {
        state.cars.isLoading = true;
        state.cars.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.item = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.error.message;
      }),
});

export const carsReducer = carsSlice.reducer;
export const { filterCars } = carsSlice.actions;
