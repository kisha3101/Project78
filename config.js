import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA5gP-F8U9GJoy51eGlsrHH98PSQOWSIEg",
    authDomain: "e-rider-d0267.firebaseapp.com",
    projectId: "e-rider-d0267",
    storageBucket: "e-rider-d0267.appspot.com",
    messagingSenderId: "964410530120",
    appId: "1:964410530120:web:ac0e96dab9a5a9a5a03b7d"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


