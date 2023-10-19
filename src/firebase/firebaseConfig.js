// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgocbRgxIIn7ZphXE0U7J5spOJh30SnXc",
  authDomain: "doc-house-ed6b8.firebaseapp.com",
  projectId: "doc-house-ed6b8",
  storageBucket: "doc-house-ed6b8.appspot.com",
  messagingSenderId: "219198785592",
  appId: "1:219198785592:web:18fb332ae0e07a584cbecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app