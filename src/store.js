import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import appReducer from "./ui/AppSlice";
import projectReducer from "./features/projects/projectSlice";
import roomReducer from "./features/rooms/roomSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    app: appReducer,
    room: roomReducer,
  },
});

export default store;
