import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_users = createAsyncThunk('get_users', async () => {
    try {
        const response = await axios.get('http://localhost:3000/users')
        return {
            users: response.data.users
        }
    } catch (error) {
        console.log(error)
    }
});

export const filter_users = createAsyncThunk('filter_users', async (obj) => {
    try {
        const response = await axios.get(`http://localhost:3000/users?name=${obj.name}`)
        return {
            users: response.data.users
        }
    } catch (error) {
        return {
            users: []
        }
    }
});

export const get_user = createAsyncThunk('get_user', async (obj) => {
    try {
        const response = await axios.get(`http://localhost:3000/users/${obj.id}`)
        return {
            user: response.data.user
        }
    } catch (error) {
        console.log(error)
    }
});