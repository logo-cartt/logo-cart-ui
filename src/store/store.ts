import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
import tokenReducer, { login } from "./features/tokenSlice";
// ...

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    token: tokenReducer,
    user: userReducer,
  },
});

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(login(token));
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
