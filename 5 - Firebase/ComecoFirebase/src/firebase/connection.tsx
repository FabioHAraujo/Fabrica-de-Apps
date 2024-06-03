// src/firebase/connection.tsx
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCBTTabpIcMhxFkZ_3cK1rY7mLoult4K2U",
  authDomain: "meuapp-82c32.firebaseapp.com",
  projectId: "meuapp-82c32",
  storageBucket: "meuapp-82c32.appspot.com",
  messagingSenderId: "493850922100",
  appId: "1:493850922100:web:a9609ad023b719c2c95521",
  measurementId: "G-3TK47LWY2W"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
