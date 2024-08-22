import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice";
import signUpReducer from "./features/signUpSlice";
import cartReducer from "./features/cartSlice";
import tokenReducer, { login } from "./features/tokenSlice";
// ...

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signUp: signUpReducer,
    cart: cartReducer,
    token: tokenReducer,
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
