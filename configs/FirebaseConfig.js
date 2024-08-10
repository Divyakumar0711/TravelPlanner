
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3EQU7eC5-YwD7HZHgrKVAD7m2Ew9zE7s",
  authDomain: "travel-planner-c2f16.firebaseapp.com",
  projectId: "travel-planner-c2f16",
  storageBucket: "travel-planner-c2f16.appspot.com",
  messagingSenderId: "537737192509",
  appId: "1:537737192509:web:39eafd6c4eb857c193b654",
  measurementId: "G-HLL2TTYQE4",

  // appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  // appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  // appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  // appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  // appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId:process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
