import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
  },
  reducers: {
    updateWeatherData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { updateWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
