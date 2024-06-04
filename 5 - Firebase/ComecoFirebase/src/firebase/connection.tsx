// src/firebase/connection.tsx
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDiRu8k1SCJfSc2mYo-kzo1A4F93SzFcZg",
  authDomain: "fabricadeapps-d7f54.firebaseapp.com",
  databaseURL: "https://fabricadeapps-d7f54-default-rtdb.firebaseio.com",
  projectId: "fabricadeapps-d7f54",
  storageBucket: "fabricadeapps-d7f54.appspot.com",
  messagingSenderId: "426927916206",
  appId: "1:426927916206:web:2ced0570d9d4f3e7aa593f",
  measurementId: "G-WJW6RLC40L"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
