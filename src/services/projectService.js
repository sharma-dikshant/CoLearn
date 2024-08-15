import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

//-------------- Get All Projects --------------

export async function getProjects() {
  const projects = [];
  const querySnapshot = await getDocs(collection(db, "projects"));
  querySnapshot.forEach((doc) => {
    projects.push(doc.data());
  });
  return projects;
}

//--------------------------------------------