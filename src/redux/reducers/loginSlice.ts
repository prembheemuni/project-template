import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";

interface loginState {
  user: string;
  isAuthenticated: boolean;
}

const initialState = {
  user: "",
  isAuthenticated: false,
} satisfies loginState as loginState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = "";
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const useUserSelector = () => useAppSelector((state) => state.user);
export default userSlice;
