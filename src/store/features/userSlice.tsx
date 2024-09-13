import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Profile, UserEmail } from "../../types/types";

export type User = {
  profile: Profile | null
};

const initialState: User = {
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserEmail>) => {
      return {
        ...state,
        email: action.payload.email,
      };
    },

  },
});

// Action creators are generated for each case reducer function
export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
