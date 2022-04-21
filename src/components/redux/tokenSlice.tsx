import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { getToken } = tokenSlice.actions;
export const selectToken = (state: any) => state.token.token;
export default tokenSlice.reducer;
