import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ASSETS} from '../../../public/Assets';

const initialState = {
  tourPlan: null,
  isLoading: true,
  isError: false,
  error: null,
};

export const TourPlanning = createAsyncThunk(
  "planning/fetchTourPlan",
  async (formData, { rejectWithValue }) => {
    try {
      const { destination } = formData;
      const destn = destination[0].toUpperCase() + destination.slice(1);
      const destinationUrl = ASSETS.rapidvacationurl+`${destn}`;
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'a853db3c89mshb1d527c3a71abb3p1588dbjsnfb1c1dffb199',
            'X-RapidAPI-Host': 'vacations-details-your-ultimate-guide.p.rapidapi.com',
          },
        };
      const response = await fetch(destinationUrl, options);
      if (!response.ok) {
        throw new Error('Failed to fetch tour plan');
      }
      const result = await response.json();
      console.log("result",result);

      const flightUrl = ASSETS.rapidflighturl+`=${destn}&domain=AE&locale=en_GB`;
      const flightOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': 'a853db3c89mshb1d527c3a71abb3p1588dbjsnfb1c1dffb199',
          'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
        },
      };
      const flightResponse = await fetch(flightUrl, flightOptions);
      if (!flightResponse.ok) {
        throw new Error('Failed to fetch tour plan');
      }
      const flightResult = await flightResponse.json();
      console.log("flightResult",flightResult.data);
      result["flight"] = flightResult.data;
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const AiPlanning = createSlice({
  name: 'planningTour',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(TourPlanning.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(TourPlanning.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.tourPlan = action.payload;
    });

    builder.addCase(TourPlanning.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default AiPlanning.reducer;
