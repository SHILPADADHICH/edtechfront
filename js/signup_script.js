import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"; 
// Firebase configuration
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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); 
// Reference to the data in the database
const dataRef = ref(database, 'users');  
// Data to be added
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value.trim();
  const email = document.getElementById('email').value.trim();
  const number = document.getElementById('number').value.trim();
  const institute = document.getElementById('institute').value.trim();
  const gender = document.getElementById('gender').value.trim();
  
  const newData = {
    Name: name,
    Password: password,
    Email: email,
    Number: number,
    Institute: institute,
    Gender: gender
  }; 
  // Add data to the database
  push(dataRef, newData)
    .then(() => {
      alert('Signup successfully!');
      window.location.href='login.html';
    })
    .catch((error) => {
      console.error('Error adding data: ', error);
    });
});