import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const mainReducer = createSlice({
  name: "main",
  initialState,
  reducers: {
  },
});

export default mainReducer.reducer;
