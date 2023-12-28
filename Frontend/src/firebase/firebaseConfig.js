import { initializeApp } from "firebase/app";
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBYY5-7ltMfOnne3xjFbp6S1dvYlrP1D3E",
  authDomain: "fooddelight-3644f.firebaseapp.com",
  projectId: "fooddelight-3644f",
  storageBucket: "fooddelight-3644f.appspot.com",
  messagingSenderId: "295858104570",
  appId: "1:295858104570:web:b01f329396509e216d8143"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export {firebase}