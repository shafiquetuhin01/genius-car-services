// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk6fKpLFcLpSAYyXSyWBLqjLdPnIsxHKs",
  authDomain: "genius-car-services-a69e0.firebaseapp.com",
  projectId: "genius-car-services-a69e0",
  storageBucket: "genius-car-services-a69e0.appspot.com",
  messagingSenderId: "951028641215",
  appId: "1:951028641215:web:95be22a36d03c224ed850a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
