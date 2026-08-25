import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "حط apiKey بتاعك هنا",
  authDomain: "حط authDomain بتاعك هنا",
  projectId: "حط projectId بتاعك هنا", 
  appId: "حط appId بتاعك هنا"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
