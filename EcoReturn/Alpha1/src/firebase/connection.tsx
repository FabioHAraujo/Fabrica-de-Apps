import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };