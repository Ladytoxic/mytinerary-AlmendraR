import { createReducer } from "@reduxjs/toolkit";
import { user_login, user_register, user_token } from "../acitions/userActions";

const initialState = {
    users: [],
    user: null,
    token: null
}

const usersReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_login.fulfilled, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_register.fulfilled, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_token, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
            }
        })
)

export default usersReducer;