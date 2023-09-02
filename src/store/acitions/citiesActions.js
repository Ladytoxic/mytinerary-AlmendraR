import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_cities = createAsyncThunk('get_cities', async () => {
    try {
        const response = await axios.get('http://localhost:3000/cities')
        return {
            cities: response.data.cities
        }
    } catch (error) {
        console.log(error)
    }
});

export const filter_cities = createAsyncThunk('filter_cities', async (obj) => {
    try {
        const response = await axios.get(`http://localhost:3000/cities?name=${obj.name}`)
        return {
            cities: response.data.cities
        }
    } catch (error) {
        return {
            cities: []
        }
    }
});

export const get_city = createAsyncThunk('get_city', async (obj) => {
    try {
        const response = await axios.get(`http://localhost:3000/cities/${obj.id}`)
        return {
            city: response.data.city
        }
    } catch (error) {
        console.log(error)
    }
});