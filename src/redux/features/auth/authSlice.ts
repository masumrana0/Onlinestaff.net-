// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { PROFILE_INFO_KEY } from "@/constant/storage.key";
// import { IProfile } from "@/interface/profile";
// import { handleLoggedIn, isLoggedIn, Logout } from "@/service/auth.service";
// import {
//   getFromLocalStorageAsParse,
//   setToLocalStorageAsStringify,
// } from "@/utils/local-storage";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // Define the initial state interface
// export interface InitialState {
//   isLoggedIn: boolean;
//   profile: IProfile | null;
// }

// // Initialize the state using a function
// const initializeState = (): InitialState => ({
//   isLoggedIn: isLoggedIn() || false,
//   profile: getFromLocalStorageAsParse(PROFILE_INFO_KEY),
// });

// const initialState = initializeState();

// // Create the auth slice
// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setIsLoggedIn: (state, action: PayloadAction<string>) => {
//       state.isLoggedIn = true;
//       handleLoggedIn(action.payload);
//     },
//     setLogOut: (state) => {
//       state.isLoggedIn = false;
//       Logout();
//     },
//     setProfileInfo: (state, action: PayloadAction<IProfile | any>) => {
//       if (action.payload) {
//         setToLocalStorageAsStringify(PROFILE_INFO_KEY, action.payload);
//         state.profile = action.payload;
//       }
//     },
//   },
// });

// // Export actions and reducer
// export const { setIsLoggedIn, setLogOut, setProfileInfo } = authSlice.actions;
// export default authSlice.reducer;

// src/store/authSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";

// User interface
export interface TUser {
  userId: string;
  name: string;
  email: string;
  role: string;
  photo: string;
  iat: number;
  exp: number;
}

// AuthState interface
interface AuthState {
  user: TUser | null;
  token: string | null;
}

// Define the initial state with proper type
const initialState: AuthState = {
  user: null,
  token: null,
};

// Create the authSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Export actions
export const { setUser, logout } = authSlice.actions;

// Selector to get user from state
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

// Export the reducer
export default authSlice.reducer;
