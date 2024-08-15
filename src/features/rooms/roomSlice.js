import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byId: {}, // Store rooms by their ID for quick lookup
  allIds: [], // Store an array of all room IDs
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRoom(state, action) {
      const room = action.payload;
      state.byId[room.id] = room;
      state.allIds.push(room.id);
    },
    removeRoom(state, action) {
      const roomId = action.payload;
      delete state.byId[roomId];
      state.allIds = state.allIds.filter((id) => id !== roomId);
    },
    // updateRoom(state, action) {
    //   const updatedRoom = action.payload;
    //   if (state.byId[updatedRoom.id]) {
    //     state.byId[updatedRoom.id] = updatedRoom;
    //   }
    // },
    // setRooms(state, action) {
    //   const rooms = action.payload;
    //   state.byId = {};
    //   state.allIds = [];
    //   rooms.forEach((room) => {
    //     state.byId[room.id] = room;
    //     state.allIds.push(room.id);
    //   });
    // },
  },
});

export const { addRoom, removeRoom } = roomsSlice.actions;

export default roomsSlice.reducer;
