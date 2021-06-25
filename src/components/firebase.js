import firebase from "firebase/app"
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB4qT-vTung-hZmGp_faAgT_CCABU74mNE",
    authDomain: "spottchat-8dce9.firebaseapp.com",
    projectId: "spottchat-8dce9",
    storageBucket: "spottchat-8dce9.appspot.com",
    messagingSenderId: "1083298855491",
    appId: "1:1083298855491:web:674ec5395cb5bd2218b2f6"
  }).auth();