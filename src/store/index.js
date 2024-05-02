import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/main";
import jobFilterReducer from "./reducers/JobFilterSlice";

const store = configureStore({
  reducer: {
    app: mainReducer,
    jobFilter: jobFilterReducer,
  },
});

export default store;
