import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
  },
  reducers: {
    updateData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { updateData } = weatherSlice.actions;

export default weatherSlice.reducer;
