import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, user: {} },
  reducers: {
    login: (_, { payload }) => payload,
    logout: () => ({ token: null, user: {} }),
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
