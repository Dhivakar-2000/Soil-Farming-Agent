// user.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

document.getElementById('user-register').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    // Register the user
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registered successfully
            const user = userCredential.user;
            console.log("User registered:", user.email);
            
            // Redirect to login page after successful registration
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.error("Error registering user:", error.message);
            alert("Registration failed: " + error.message);
        });
});
