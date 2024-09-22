// login.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

document.getElementById('user-login').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Log the user in
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            console.log("User logged in:", user.email);

            // Redirect to user dashboard
            window.location.href = "user-dashboard.html";  // Change to your actual dashboard page
        })
        .catch((error) => {
            console.error("Error logging in user:", error.message);
            alert("Login failed: " + error.message);
        });
});
