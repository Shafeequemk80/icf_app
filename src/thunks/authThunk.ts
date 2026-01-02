import { createAsyncThunk } from "@reduxjs/toolkit";
import  { AxiosError } from "axios";
import type { User } from "../types/auth";
import api from "../api/axios";



type LoginCredentials = {
  username: string;
  password: string;
};

type LoginResponse = {
  user: User;
  token: string;
};

/* --------------------------------
   Async Thunk
-------------------------------- */

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: string }
>(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    console.log(credentials)
    try {
      const response = await api.post<LoginResponse>( 
        "/api/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // important if using cookies
        }
      );

      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);
