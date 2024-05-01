import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/main";

const store = configureStore({
  reducer: {
    app: mainReducer,
  },
});

export default store;
