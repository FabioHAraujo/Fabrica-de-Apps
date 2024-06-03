// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE9LhyQKsT6_3wq4des2GoKKy8wIiMi6A",
  authDomain: "biscoito-da-sorte-e1a1d.firebaseapp.com",
  projectId: "biscoito-da-sorte-e1a1d",
  storageBucket: "biscoito-da-sorte-e1a1d.appspot.com",
  messagingSenderId: "618214040377",
  appId: "1:618214040377:web:4a620b561f58e2d429bee8",
  measurementId: "G-WSPQQ0S670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export default db;