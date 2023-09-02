import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers";

export const store = configureStore({
    reducer: {
        userReducer: userReducers
    }
})