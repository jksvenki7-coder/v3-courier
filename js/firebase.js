// ===============================
// Firebase Configuration
// V3 Group of Business
// ===============================

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Replace with your Firebase Project Details
const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Save Booking
async function saveBooking(data){

try{

const docRef = await addDoc(
collection(db,"bookings"),
data
);

console.log("Booking Saved :",docRef.id);

alert("Booking Saved Successfully");

}catch(error){

console.error(error);

alert("Booking Failed");

}

}

// Export
window.saveBooking = saveBooking;
