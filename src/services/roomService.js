import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

//-------------- Get All Rooms --------------

export async function getRooms() {
  const rooms = [];
  const querySnapshot = await getDocs(collection(db, "rooms"));
  querySnapshot.forEach((doc) => {
    rooms.push(doc.data());
  });
  return rooms;
}

//--------------------------------------------
