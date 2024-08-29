import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Profile, UserLogin } from "../../types/types";

type User = {
  profiles: Profile[]
};

const initialState: User = {
  profiles: [
    {
      id: "1",
      name: "Azimkhan",
      email: "aabdulsatarov@gmail.com",
      password: "123456",
      confirmPassword: "123456",
      isLoggedIn: false,
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Profile>) => {
      state.profiles.push(action.payload);
    },
    loginUser: (state, action: PayloadAction<UserLogin>) => {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: action.payload.isLoggedIn,
      };
    },

  },
});

// Action creators are generated for each case reducer function
export const { addUser, loginUser } = userSlice.actions;

export default userSlice.reducer;
