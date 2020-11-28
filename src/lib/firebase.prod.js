import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD9DB_D82uyJNYjUGtCKp0AOMgDPHSM11c",
  authDomain: "netflix-clone-69b24.firebaseapp.com",
  databaseURL: "https://netflix-clone-69b24.firebaseio.com",
  projectId: "netflix-clone-69b24",
  storageBucket: "netflix-clone-69b24.appspot.com",
  messagingSenderId: "103837519639",
  appId: "1:103837519639:web:67458c9e79bea34b5b3152",
};

const firebase = Firebase.initializeApp(config);

export { firebase };

// seedDatabase(firebase);
