import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  RegisterAccountData,
  RegisterData,
  LoginAccountData,
  LoginData,
} from "@type/AuthType";

import { AuthRegister, AuthLogin } from "@store/AuthAsyncThunk";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* 
        for Register authentication from (AuthAsyncThunk.ts) support, 
        including pending, accepted, rejected
      */
      .addCase(AuthRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        AuthRegister.fulfilled,
        (state: RegisterData, action: PayloadAction<RegisterAccountData>) => {
          state.data.push(action.payload);
        }
      )
      .addCase(AuthRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      /* 
        for Login authentication from (AuthAsyncThunk.ts) support, 
        including pending, accepted, rejected
      */
      .addCase(AuthLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        AuthLogin.fulfilled,
        (state: LoginData, action: PayloadAction<LoginAccountData>) => {
          state.data.push(action.payload);
        }
      )
      .addCase(AuthLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
