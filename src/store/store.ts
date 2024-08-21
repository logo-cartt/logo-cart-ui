import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";
import signUpReducer from "./features/signUpSlice";
import cartReducer from "./features/cartSlice";
// ...

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signUp: signUpReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
