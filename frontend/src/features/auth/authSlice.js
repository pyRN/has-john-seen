import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get user from localStorage
const oUserData = JSON.parse(localStorage.getItem("oUserData"));
// console.log(localStorage);

const initialState = {
  oUserData: oUserData ? oUserData : null,
  bIsError: false,
  bIsSuccess: false,
  bIsLoading: false,
  sMessage: "",
};

//Register user
export const register = createAsyncThunk(
  "auth/register",
  async (oUserData, thunkAPI) => {
    try {
      return await authService.register(oUserData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Log out user

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

//Log in user
export const login = createAsyncThunk(
  "auth/login",
  async (oUserData, thunkAPI) => {
    try {
      return await authService.login(oUserData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Reset Password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async () => {
    await authService.resetPassword();
  }
);

//.pending, .fulfilled, .rejected are used with createAsyncThunk
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.bIsError = false;
      state.bIsSuccess = false;
      state.bIsLoading = false;
      state.sMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.bIsLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.bIsLoading = false;
        state.bIsSuccess = true;
        state.oUserData = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.bIsLoading = false;
        state.bIsError = true;
        state.sMessage = action.payload;
        state.oUserData = null;
      })
      .addCase(login.pending, (state) => {
        state.bIsLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.bIsLoading = false;
        state.bIsSuccess = true;
        state.oUserData = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.bIsLoading = false;
        state.bIsError = true;
        state.sMessage = action.payload;
        state.oUserData = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.oUserData = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
