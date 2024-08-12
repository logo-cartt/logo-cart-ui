import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  email: string,
  password: string,
  error: string,
};

const initialState: User = {
  email: "",
  password: "",
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      return { ...state, email: action.payload };
    },
    setPassword: (state, action: PayloadAction<string>) => {
      return { ...state, password: action.payload };
    },
    setError: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, setError } = loginSlice.actions;

export default loginSlice.reducer;
