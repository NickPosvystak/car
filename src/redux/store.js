import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./authReducer";

export const store = configureStore({
    reducer: {
        cars: carsReducer
    }
})