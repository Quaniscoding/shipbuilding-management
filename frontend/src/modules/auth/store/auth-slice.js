import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { localStorageHelper } from "../../../utils/local-storage-helper";

// Xóa interface và type import, chỉ giữ lại logic
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = action.payload;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
    getCurrentUser: (state) => {
      state.isLoading = true;
    },
    getCurrentUserSuccess(state, action) {
      const { accessToken } = localStorageHelper.getAuthToken();
      const { role } = jwtDecode(accessToken);
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = { role: role, ...action.payload };
    },
    getCurrentUserFailure(state) {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = null;
      state.user = undefined;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
