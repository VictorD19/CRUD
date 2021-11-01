import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLcWjmFPjqYUxasN2lSWhkweHGgJFO3hE",
  authDomain: "my-crud-12641.firebaseapp.com",
  projectId: "my-crud-12641",
  storageBucket: "my-crud-12641.appspot.com",
  messagingSenderId: "670960704700",
  appId: "1:670960704700:web:be571431f6def0974e44b9"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)

