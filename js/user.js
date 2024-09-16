import { auth } from "./firebase.js";
// User registration
document.getElementById('user-register').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('user-dashboard').style.display = 'block';
            console.log("User registered");
            fetchSoilDetails();
            fetchDistributorDetails();
        })
        .catch((error) => {
            console.error("Error registering user", error);
        });
});

// Fetch Soil Details
function fetchSoilDetails() {
    db.collection('soils').get().then((snapshot) => {
        const soilList = document.getElementById('soil-list');
        snapshot.forEach((doc) => {
            let li = document.createElement('li');
            li.textContent = `${doc.data().name}: ${doc.data().details}`;
            soilList.appendChild(li);
        });
    });
}

// Fetch Distributor Details
function fetchDistributorDetails() {
    db.collection('distributors').get().then((snapshot) => {
        const distributorList = document.getElementById('distributor-list');
        snapshot.forEach((doc) => {
            let li = document.createElement('li');
            li.textContent = `${doc.data().name}: ${doc.data().location}`;
            distributorList.appendChild(li);
        });
    });
}
