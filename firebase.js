import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIMBpfcEsebKT_2-eBqDJxxyhUSMP3Chw",
  authDomain: "chat-bot-82b7a.firebaseapp.com",
  projectId: "chat-bot-82b7a",
  storageBucket: "chat-bot-82b7a.appspot.com",
  messagingSenderId: "82558788906",
  appId: "1:82558788906:web:2441337853f2b5096eaa53",
};

// Initialize Firebase
//export const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);
const storage = getStorage(firebase);

export { firebase, auth, db, storage };
