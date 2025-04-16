import firebase from 'firebase/app';
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNLeO71BoKj6LWMYFGITbpg-9ta7dwNs4",
    authDomain: "video-meeting-9d6a1.firebaseapp.com",
    projectId: "video-meeting-9d6a1",
    storageBucket: "video-meeting-9d6a1.firebasestorage.app",
    messagingSenderId: "462704195509",
    appId: "1:462704195509:web:6ad799debf06366c24cbfc",
    measurementId: "G-6K3Z3WFR9Z"
  };

  // firebase initialization
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };