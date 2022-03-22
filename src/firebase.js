import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBcEVEZjC5HSF9exbEcY7rqx-9EaCuX-tU",
  authDomain: "react-firebase-course-bfc2b.firebaseapp.com",
  projectId: "react-firebase-course-bfc2b",
  storageBucket: "react-firebase-course-bfc2b.appspot.com",
  messagingSenderId: "501415498016",
  appId: "1:501415498016:web:ac3ecbfbf935638b42c745"
};

const app = initializeApp(firebaseConfig);
export default getFirestore()