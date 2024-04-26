// Import the Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// Firebase configuration (use your own configuration)
const firebaseConfig = {
    apiKey: "AIzaSyAVTJUKe-BiEmcPrWUEO3PG094dxEvbdek",
    authDomain: "bright01-d0989.firebaseapp.com",
    projectId: "bright01-d0989",
    storageBucket: "bright01-d0989.appspot.com",
    messagingSenderId: "585584630680",
    appId: "1:585584630680:web:21ac6a24284eb563bd29ed",
    measurementId: "G-ZSVRM23RP4",
    databaseURL: "https://bright01-d0989-default-rtdb.firebaseio.com"
};
// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// Get a reference to the Firebase database
const database = getDatabase(app);
// Reference to the 'Users' node in the database
const usersRef = ref(database, 'users');
// Login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginMail = document.getElementById('email').value.trim();
  const loginPassword = document.getElementById('password').value.trim();
  // Retrieve data from the 'Users' node in the database
  onValue(usersRef, (snapshot) => {
        const users = snapshot.val();
        if (users) {
            const foundUser = Object.values(users).find(user => user.Email === loginMail && user.Password === loginPassword);
            if (foundUser) {
                alert('Login successful!');
                const userName = foundUser.Name; 
                sessionStorage.setItem('userName', userName); 
                window.location.href = "home1.html";
                // Redirect or perform other actions upon successful login
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } else {
            alert('No users found. Please sign up first.');
        }
    });
});