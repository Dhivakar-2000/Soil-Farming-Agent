import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Admin login
document.getElementById('admin-login').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Admin logged in:", user.email);
            window.location.href = "admin-dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => {
            console.error("Error logging in admin:", error.message);
            alert("Login failed: " + error.message);
        });
});

// Post Soil Details
document.getElementById('post-soil-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const soilName = document.getElementById('soil-name').value;
    const soilDetails = document.getElementById('soil-details').value;

    try {
        // Add soil details to Firestore collection 'soils'
        await addDoc(collection(db, 'soils'), {
            name: soilName,
            details: soilDetails,
        });
        console.log("Soil details posted successfully");
        alert("Soil details posted successfully!");
        document.getElementById('post-soil-form').reset(); // Clear the form
    } catch (error) {
        console.error("Error posting soil details:", error);
        alert("Failed to post soil details.");
    }
});

// Post Distributor Details
document.getElementById('post-distributor-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const distributorName = document.getElementById('distributor-name').value;
    const location = document.getElementById('distributor-location').value;

    try {
        // Add distributor details to Firestore collection 'distributors'
        await addDoc(collection(db, 'distributors'), {
            name: distributorName,
            location: location,
        });
        console.log("Distributor details posted successfully");
        alert("Distributor details posted successfully!");
        document.getElementById('post-distributor-form').reset(); // Clear the form
    } catch (error) {
        console.error("Error posting distributor details:", error);
        alert("Failed to post distributor details.");
    }
});

// Handle Logout
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            auth.signOut().then(() => {
                window.location.href = "index.html"; // Redirect to login page
            }).catch((error) => {
                console.error("Error logging out:", error);
            });
        });
    } else {
        console.error('Logout button not found');
    }
});
