// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCW5gEeuhnWTRbjA1F5lW4e0tuPn6jXHSg",
	authDomain: "pinzon-f491a.firebaseapp.com",
	projectId: "pinzon-f491a",
	storageBucket: "pinzon-f491a.appspot.com",
	messagingSenderId: "1013552974559",
	appId: "1:1013552974559:web:4a647054de698b956cf76a",
	measurementId: "G-VCBGKRTR9D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
