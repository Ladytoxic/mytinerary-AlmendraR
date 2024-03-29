import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import apiUrl from "../../api";

export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post(`${apiUrl}/auth/signin`, obj.data);
        console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
        Swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
        })

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error.response.data);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
        return {
            user: null
        }
    }
})

export const user_register = createAsyncThunk('user_register', async (obj) => {
    try {
        const { data } = await axios.post(`${apiUrl}/auth/signup`, obj.data);
        console.log(data);
        Swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
        })

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error.response.data);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
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