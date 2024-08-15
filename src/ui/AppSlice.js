import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  userLoggedIn: false,
  pageTitle: "CoLearn",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setUserLoggedIn(state, action) {
      state.userLoggedIn = action.payload;
    },
    setPageTitle(state, action) {
      state.pageTitle = action.payload;
    },
  },
});

export const { setTheme, setUserLoggedIn, setPageTitle } = appSlice.actions;
export default appSlice.reducer;
