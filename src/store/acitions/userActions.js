import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:3000/auth/signin', obj.data);
        console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error.response.data);
        return {
            user: null
        }
    }
})

export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})