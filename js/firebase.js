import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjxXcXrIk0phYGbprFVvo4ahw5_Nbyz9I",
  authDomain: "soil-farming-agent-d.firebaseapp.com",
  projectId: "soil-farming-agent-d",
  storageBucket: "soil-farming-agent-d.appspot.com",
  messagingSenderId: "658928404109",
  appId: "1:658928404109:web:1a84c39bfaf6922b4e84c4",

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the auth object
export { auth , db };

