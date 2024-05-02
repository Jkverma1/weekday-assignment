import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minExperience: "",
  companyName: "",
  location: "",
  remoteOnSite: "",
  techStack: "",
  role: "",
  minBasePay: "",
};

const jobFilterSlice = createSlice({
  name: "jobFilter",
  initialState,
  reducers: {
    updateMinExperience: (state, action) => {
      state.minExperience = action.payload;
    },
    updateCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updateRemoteOnSite: (state, action) => {
      state.remoteOnSite = action.payload;
    },
    updateTechStack: (state, action) => {
      state.techStack = action.payload;
    },
    updateRole: (state, action) => {
      state.role = action.payload;
    },
    updateMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },
  },
});

export const {
  updateMinExperience,
  updateCompanyName,
  updateLocation,
  updateRemoteOnSite,
  updateTechStack,
  updateRole,
  updateMinBasePay,
} = jobFilterSlice.actions;

export default jobFilterSlice.reducer;
