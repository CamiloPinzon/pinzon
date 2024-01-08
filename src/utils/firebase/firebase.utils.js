import { initializeApp } from "firebase/app";
import { collection, writeBatch, getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBIz71XTPGNRXOsCt6su7RQVlSKtl4HRFk",
	authDomain: "pinzon-2a8d2.firebaseapp.com",
	projectId: "pinzon-2a8d2",
	storageBucket: "pinzon-2a8d2.appspot.com",
	messagingSenderId: "634625500697",
	appId: "1:634625500697:web:e6d59afa0054a0916b2c88",
	measurementId: "G-40TNCYHKZJ",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

export const addContactMessage = async (messageData) => {
	const collectionRef = collection(db, "contact");
	const batch = writeBatch(db);
	const docRef = doc(collectionRef);
	batch.set(docRef, messageData);
	await batch
		.commit()
		.then(() => true)
		.catch((error) => error);
};
