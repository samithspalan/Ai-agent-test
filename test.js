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

    // Add password length and complexity checks
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        alert('Password must contain at least one lowercase letter, one uppercase letter, and one number.');
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
        return true;
    } catch (error) {
        console.error('Error storing user session:', error);
        alert('Error storing user session. Please try again.');
        return false;
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
        alert('Error retrieving user session. Please try again.');
        return null;
    }
}

// Handles the login form submission
function handleLogin() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!emailInput || !passwordInput) {
        console.error('Login fields not found in the DOM.');
        alert('Error: Login fields not found.');
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!validateInputFields(email, password)) {
        return;
    }

    if (authenticateUser(email, password)) {
        console.log('Login successful for:', email);
        if (storeUserSession(email)) {
            // Login successful, redirect to dashboard or homepage
            alert('Login successful!');
            // Add redirect logic here
        }
    } else {
        alert('Invalid email or password. Please try again.');
        passwordInput.value = '';
    }
}