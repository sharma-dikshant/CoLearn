import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

//-------------- Get All Users --------------

export async function getUsers() {
  const users = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  return users;
}

//--------------------------------------------