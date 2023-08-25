import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers.js";

export const store = configureStore({
    reducer: {
        userReducer: userReducers
    }
})