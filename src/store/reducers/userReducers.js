import { createReducer } from "@reduxjs/toolkit";
import { get_user, get_users, filter_users } from "../acitions/userActions";

const initialState = {
    users: [],
    user: ''
}

const usersReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_users.fulfilled, (state, action) => {

            return {
                ...state,
                users: action.payload.users
            }
        })
        .addCase(filter_users.fulfilled, (state, action) => {

            return {
                ...state,
                users: action.payload.users
            }
        })
        .addCase(get_user.fulfilled, (state, action) => {

            return {
                ...state,
                user: action.payload.user
            }
        })
)

export default usersReducer;