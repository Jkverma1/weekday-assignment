import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AppliedJobsData = createAsyncThunk(
  "main/AppliedJobsData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        { limit: 10, offset: 0 },
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data.jdList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  AppliedJobsData: [],
  loading: false,
  error: null,
};

const mainReducer = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AppliedJobsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AppliedJobsData.fulfilled, (state, action) => {
        state.loading = false;
        state.AppliedJobsData = [...state.AppliedJobsData, ...action.payload];
      })
      .addCase(AppliedJobsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default mainReducer.reducer;
