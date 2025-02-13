import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    adminLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
