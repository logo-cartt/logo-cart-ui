/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: TokenState = {
  token: null,
  isAuthenticated: false,
};

const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = tokenSlice.actions;
export default tokenSlice.reducer;
