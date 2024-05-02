import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
};

const mainReducer = createSlice({
  name: "main",
  initialState,
  reducers: {},
});

export default mainReducer.reducer;
