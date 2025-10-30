import { configureStore } from "@reduxjs/toolkit";
import { UsersApi } from "./services/users";
import { modalSlice } from "./reducers/modal";

export const store = configureStore({
  reducer: {
    [UsersApi.reducerPath]: UsersApi.reducer,
    modal: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UsersApi.middleware),
});

// Optional: infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
