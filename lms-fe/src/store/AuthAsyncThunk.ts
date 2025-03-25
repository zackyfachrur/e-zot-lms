import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { LoginAccountData, RegisterAccountData } from "@type/AuthType";

const API_REGISTER_URL = `http://localhost:${import.meta.env.VITE_API_PORT}/${
  import.meta.env.VITE_AUTH_API_ENDPOINT
}/register`;

export const AuthRegister = createAsyncThunk(
  "/register",
  async (account: RegisterAccountData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_REGISTER_URL, account);
      return response.data.data;
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        return rejectWithValue("Akun mu sudah ada silahkan login!");
      } else if (err.request) {
        // Jika tidak ada response dari serve
        return rejectWithValue("Oops! terjadi kesalahan pada database");
      } else {
        return console.log(err.message);
      }
    }
  }
);

const API_LOGIN_URL = `http://localhost:${import.meta.env.VITE_API_PORT}/${
  import.meta.env.VITE_AUTH_API_ENDPOINT
}/register`;

export const AuthLogin = createAsyncThunk(
  "/login",
  async (account: LoginAccountData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_LOGIN_URL, account);
      return response.data.data;
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        return rejectWithValue("Akun mu belum dibuat!");
      } else if (err.request) {
        // Jika tidak ada response dari server
        return rejectWithValue("Oops! terjadi kesalahan pada database");
      } else {
        return console.log(err.message);
      }
    }
  }
);
