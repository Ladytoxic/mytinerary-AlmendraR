import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers"
import userReducer from "./reducers/userReducers";


export const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer,
        userReducer: userReducer
    }
})