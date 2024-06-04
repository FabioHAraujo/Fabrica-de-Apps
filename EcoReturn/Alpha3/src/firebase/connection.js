// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBTTabpIcMhxFkZ_3cK1rY7mLoult4K2U",
  authDomain: "meuapp-82c32.firebaseapp.com",
  databaseURL: "https://meuapp-82c32-default-rtdb.firebaseio.com",
  projectId: "meuapp-82c32",
  storageBucket: "meuapp-82c32.appspot.com",
  messagingSenderId: "493850922100",
  appId: "1:493850922100:web:a9609ad023b719c2c95521",
  measurementId: "G-3TK47LWY2W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, auth };
