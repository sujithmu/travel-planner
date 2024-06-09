import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ASSETS} from '../../../public/Assets';

const initialState = {
    destinationData: null,
    isLoading: true,
    isError: false,
    error:null
};

export const destination = createAsyncThunk("popularPlaces", async (formData, { rejectWithValue }) => {
    try {
        const url = ASSETS.rapidcountryurl`=${formData}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_COUNTRY_KEY,
                'X-RapidAPI-Host': process.env.RAPIDAPI_COUNTRY_HOST
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const popularDestionation = createSlice({
    name: 'pDestination',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(destination.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(destination.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.destinationData = action.payload.data;
        });

        builder.addCase(destination.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error
        });

    },
});

export default popularDestionation.reducer;