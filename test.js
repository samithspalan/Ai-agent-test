// test.js
/**
 * Handles the login form submission.
 * Note: In a production environment, authentication must be handled server-side.
 * This script is for demonstration/mock purposes only.
 */

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Helper function to validate input fields
function validateInputFields(email, password) {
    if (email === '' || password === '') {
        alert('Please enter both email and password.');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Invalid email format.');
        return false;
    }

    return true;
}

// Mock authentication function (replace with actual server-side authentication)
function authenticateUser(email, password) {
    // For demonstration purposes only, do not use in production
    if (email === 'user@example.com' && password === 'password123') {
        return true;
    }
    return false;
}

// Helper function to store user session
function storeUserSession(email) {
    try {
        const userSession = { email, isLoggedIn: true };
        localStorage.setItem('user_session', JSON.stringify(userSession));
    } catch (error) {
        console.error('Error storing user session:', error);
    }
}

// Helper function to retrieve the active user session
function getUserSession() {
    try {
        const session = localStorage.getItem('user_session');
        if (!session) {
            console.log('No active session found.');
            return null;
        }
        return JSON.parse(session);
    } catch (error) {
        console.error('Error retrieving user session:', error);
    }
}

// Handles the login form submission
function handleLogin() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!emailInput || !passwordInput) {
        console.error('Login fields not found in the DOM.');
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!validateInputFields(email, password)) {
        return;
    }

    if (authenticateUser(email, password)) {
        console.log('Login successful for:', email);
        storeUserSession(email);
    } else {
        alert('Invalid email or password. Please try again.');
        passwordInput.value = '';
    }
}