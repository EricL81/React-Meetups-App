import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD-eE123PvCx4962N2NylIgOEha4LNJ8XU",
	authDomain: "react-meetups2.firebaseapp.com",
	projectId: "react-meetups2",
	storageBucket: "react-meetups2.appspot.com",
	messagingSenderId: "810627262608",
	appId: "1:810627262608:web:5158073c144ed13ca65015",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export default app;
