import { configureStore } from "@reduxjs/toolkit";
import TokenReducer from "./tokenSlice";

export default configureStore({
  reducer: {
    token: TokenReducer,
  },
});
