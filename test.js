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
        throw new Error('Please enter both email and password.');
    }

    if (!isValidEmail(email)) {
        throw new Error('Invalid email format.');
    }

    // Add password length and complexity checks
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        throw new Error('Password must contain at least one lowercase letter, one uppercase letter, and one number.');
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
        throw new Error('Error storing user session. Please try again.');
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
        throw new Error('Error retrieving user session. Please try again.');
    }
}

// Handles the login form submission
function handleLogin() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!emailInput || !passwordInput) {
        console.error('Login fields not found in the DOM.');
        throw new Error('Error: Login fields not found.');
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    try {
        if (!validateInputFields(email, password)) {
            throw new Error('Invalid input fields.');
        }

        if (authenticateUser(email, password)) {
            console.log('Login successful for:', email);
            if (storeUserSession(email)) {
                // Login successful, redirect to dashboard or homepage
                alert('Login successful!');
                // Add redirect logic here
                window.location.href = '/dashboard';
            }
        } else {
            throw new Error('Invalid email or password. Please try again.');
        }
    } catch (error) {
        alert(error.message);
        passwordInput.value = '';
    }
}