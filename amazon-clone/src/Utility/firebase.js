import firebase from "firebase/compat/app"; 
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"; 
import "firebase/compat/auth"; 

// Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyA2tTrzsc5B5PSgBAFftEMbDjxR8pEIpPY",
  authDomain: "test-f8b22.firebaseapp.com",
  projectId: "test-f8b22",
  storageBucket: "test-f8b22.firebasestorage.app",
  messagingSenderId: "660722337291",
  appId: "1:660722337291:web:91697c50f5cd8d2f07690e"
};

//old code

// const firebaseConfig = {
//   apiKey: "AIzaSyDovTAZ4aTdm8xs0KPQnyPKD4QsLCC1MXY",
//   authDomain: "amazon-clone-hag.firebaseapp.com",
//   projectId: "amazon-clone-hag",
//   storageBucket: "amazon-clone-aag.appspot.com",
//   messagingSenderId: "541618558773",
//   appId: "1:541618558773:web:bb870fc732ace2cc951e7c",
// };


// Initialize Firebase using the compat version
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = firebase.firestore(); 