import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  profile: null,
  isAuthenticated: false,
};

const sellerAuthSlice = createSlice({
  name: "sellerAuth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.profile = action.payload.data;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.profile = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = sellerAuthSlice.actions;

export default sellerAuthSlice.reducer;
