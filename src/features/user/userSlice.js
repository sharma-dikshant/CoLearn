import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userName: "",
  userEmail: "",
  authenticationToken: "",
  isAuthenticated: false,
  roomOwned: [],
  roomJoined: [],
  projectOwned: [],
  projectJoined: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    setAuthenticationToken(state, action) {
      state.authenticationToken = action.payload;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setRoomOwned(state, action) {
      state.roomOwned.push(action.payload);
    },
    setRoomJoined(state, action) {
      state.roomJoined.push(action.payload);
    },
    setProjectOwned(state, action) {
      state.projectOwned.push(action.payload);
    },
    setProjectJoined(state, action) {
      state.projectJoined.push(action.payload);
    },
  },
});

export const {
  setUserId,
  setUserName,
  setUserEmail,
  setAuthenticationToken,
  setIsAuthenticated,
  setRoomOwned,
  setRoomJoined,
  setProjectOwned,
  setProjectJoined,
} = userSlice.actions;

export default userSlice.reducer;
