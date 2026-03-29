// login.js
/**
 * Handles the login form submission.
 * Note: In a production environment, authentication must be handled server-side.
 * This script is for demonstration/mock purposes only.
 */
function handleLogin() {
    try {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        if (!emailInput || !passwordInput) {
            throw new Error('Login fields not found in the DOM.');
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateInput(email, password)) {
            return;
        }

        attemptLogin(email, password);
    } catch (error) {
        console.error('Error handling login:', error);
    }
}

/**
 * Validates the user input.
 * @param {string} email The email address.
 * @param {string} password The password.
 * @returns {boolean} True if the input is valid, false otherwise.
 */
function validateInput(email, password) {
    if (!email || !password || email === '' || password === '') {
        alert('Please enter both email and password.');
        return false;
    }

    // Implement additional validation logic as needed
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return false;
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
    }

    return true;
}

/**
 * Attempts to log in the user.
 * @param {string} email The email address.
 * @param {string} password The password.
 */
function attemptLogin(email, password) {
    try {
        // Implement actual login handling, such as sending a request to a server-side API
        console.log('Attempting login for:', email);

        // For demonstration purposes only, simulate a successful login
        if (email === 'example@example.com' && password === 'password123') {
            const userSession = { email, loggedIn: true };
            localStorage.setItem('user_session', JSON.stringify(userSession));
            alert('Login successful!');
        } else {
            alert('Invalid email or password. Please try again.');
            const passwordInput = document.getElementById('password');
            passwordInput.value = '';
        }
    } catch (error) {
        console.error('Error attempting login:', error);
    }
}

/**
 * Retrieves the current user session from local storage.
 * @returns {Object|null} The user session object or null if no session is found.
 */
function debugUser() {
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

// Example usage:
const handleFormSubmission = function(event) {
    event.preventDefault();
    handleLogin();
};

window.onload = function () {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
};

// Remove event listener on page unload
window.onunload = function () {
    const form = document.getElementById('login-form');
    if (form) {
        form.removeEventListener('submit', handleFormSubmission);
    }
};