import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Auth/Auth";

export const Store = configureStore({
  reducer: {
    Auth: authSlice,
  },
});
