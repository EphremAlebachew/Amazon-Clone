
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAhxmwMW5GE2Q_OZoYCPD6Ujcm2BITktVg",
    authDomain: "f123-347de.firebaseapp.com",
    projectId: "f123-347de",
    storageBucket: "f123-347de.appspot.com",
    messagingSenderId: "651957914532",
    appId: "1:651957914532:web:9d2fdbea4b4d3ae2db4f31",
    measurementId: "G-GHVM8Y3131"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };