import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

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
document.getElementById('post-soil-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const soilName = document.getElementById('soil-name').value;
    const soilDetails = document.getElementById('soil-details').value;

    db.collection('soils').add({
        name: soilName,
        details: soilDetails
    }).then(() => {
        console.log("Soil details posted");
    }).catch((error) => {
        console.error("Error posting soil details", error);
    });
});

// Post Distributor Details
document.getElementById('post-distributor-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const distributorName = document.getElementById('distributor-name').value;
    const location = document.getElementById('distributor-location').value;

    db.collection('distributors').add({
        name: distributorName,
        location: location
    }).then(() => {
        console.log("Distributor details posted");
    }).catch((error) => {
        console.error("Error posting distributor details", error);
    });
});
