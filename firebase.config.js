// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0gGm184oATMC_7JADIPZ13vlHlfYLpmM",
  authDomain: "event-management-52587.firebaseapp.com",
  projectId: "event-management-52587",
  storageBucket: "event-management-52587.appspot.com",
  messagingSenderId: "38134177602",
  appId: "1:38134177602:web:63f03627a90631c14c72db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
