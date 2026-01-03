import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/authThunk";
import type { User } from "../types/auth";



type AuthState = {

  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Logout(state) {
      localStorage.removeItem("user");
      state.token=null
      state.user = null;
      state.token = null;
    }},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        //state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { Logout } = authSlice.actions;
export default authSlice.reducer;

/* --------------------------------
   Types
-------------------------------- */

