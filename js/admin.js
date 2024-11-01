import { auth ,db } from "./firebase.js"; // Ensure auth is correctly imported from your firebase.js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"; // Import signInWithEmailAndPassword


document.addEventListener('DOMContentLoaded', () => {
    // Admin login
    const adminLoginForm = document.getElementById('admin-login');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
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
    } else {
        console.error("Admin login form not found");
    }

    // Post Soil Details
    const postSoilForm = document.getElementById('post-soil-form');
    if (postSoilForm) {
        postSoilForm.addEventListener('submit', async (e) => {
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
                postSoilForm.reset(); // Clear the form
            } catch (error) {
                console.error("Error posting soil details:", error);
                alert("Failed to post soil details.");
            }
        });
    } else {
        console.error("Post soil form not found");
    }

    // Post Distributor Details
    const postDistributorForm = document.getElementById('post-distributor-form');
    if (postDistributorForm) {
        postDistributorForm.addEventListener('submit', async (e) => {
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
                postDistributorForm.reset(); // Clear the form
            } catch (error) {
                console.error("Error posting distributor details:", error);
                alert("Failed to post distributor details.");
            }
        });
    } else {
        console.error("Post distributor form not found");
    }

    // Go to Index Button
    const goToIndexBtn = document.getElementById('go-to-index-btn');
    if (goToIndexBtn) {
        goToIndexBtn.addEventListener('click', () => {
            window.location.href = "index.html";
        });
    } else {
        console.error('Redirect button not found');
    }
});
