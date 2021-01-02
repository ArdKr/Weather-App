import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    measurmentSystem: "C",
  },
  reducers: {
    updateWeatherData(state, action) {
      state.data = action.payload;
    },
    updateMeasurmentSystem(state, action) {
      state.measurmentSystem = action.payload;
    },
  },
});

export const {
  updateWeatherData,
  updateMeasurmentSystem,
} = weatherSlice.actions;

export default weatherSlice.reducer;
