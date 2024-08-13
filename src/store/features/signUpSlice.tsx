import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../../types/types";

type SignUp = {
  profiles: Profile[]
};

const initialState: SignUp = {
  profiles: [
    {
      id: "1",
      name: "Azimkhan",
      email: "aabdulsatarov@gmail.com",
      password: "123456",
      confirmPassword: "123456",
    },
  ],
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Profile>) => {
      state.profiles.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = signUpSlice.actions;

export default signUpSlice.reducer;
