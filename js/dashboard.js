import { db } from './firebase.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

// Fetch and display soil details
const fetchSoilDetails = async () => {
    const soilListElement = document.getElementById('soil-list');
    soilListElement.innerHTML = ''; // Clear the list

    try {
        const querySnapshot = await getDocs(collection(db, 'soilDetails'));
        querySnapshot.forEach((doc) => {
            const soil = doc.data();
            const li = document.createElement('li');
            li.textContent = `${soil.soilName}: ${soil.soilDetails}`;
            soilListElement.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching soil details: ', error);
    }
};

// Fetch and display distributor details
const fetchDistributorDetails = async () => {
    const distributorListElement = document.getElementById('distributor-list');
    distributorListElement.innerHTML = ''; // Clear the list

    try {
        const querySnapshot = await getDocs(collection(db, 'distributorDetails'));
        querySnapshot.forEach((doc) => {
            const distributor = doc.data();
            const li = document.createElement('li');
            li.textContent = `${distributor.distributorName} - ${distributor.distributorLocation}`;
            distributorListElement.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching distributor details: ', error);
    }
};

// Call these functions when the page loads
fetchSoilDetails();
fetchDistributorDetails();
