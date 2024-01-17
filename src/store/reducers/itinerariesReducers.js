import { createReducer } from '@reduxjs/toolkit';
import { get_cities, filter_cities, get_city } from "../acitions/citiesActions"

const initialState = {
    cities: [],
    city: ''
}

const itinerariesReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_cities.fulfilled, (state, action) => {

            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(filter_cities.fulfilled, (state, action) => {

            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(get_city.fulfilled, (state, action) => {

            return {
                ...state,
                city: action.payload.city
            }
        })
)

export default itinerariesReducer;