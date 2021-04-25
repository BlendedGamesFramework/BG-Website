import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCTp7wl8iifEbYvXpd2n0Jj8GOdzo6ju-Q",
    authDomain: "blended-games-898a7.firebaseapp.com",
    projectId: "blended-games-898a7",
    storageBucket: "blended-games-898a7.appspot.com",
    messagingSenderId: "405005751260",
    appId: "1:405005751260:web:8ef996a8450c840d73b519",
    measurementId: "G-X6ZNS5X63L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase;

//https://firebase.google.com/docs/firestore/security/get-started#auth-required
