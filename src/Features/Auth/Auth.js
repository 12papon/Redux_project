import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      ((state.user = action.payload.user),
        (state.token = action.payload.token),
        (state.isAuthenticated = true));

      //JSON converted
      const userData = JSON.stringify(state);
      localStorage.setItem("user", userData);
    },
    logout: (state) => {
      ((state.user = null),
        (state.token = null),
        (state.isAuthenticated = false));
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
