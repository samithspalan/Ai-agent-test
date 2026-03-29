/**
 * Handles the login form submission.
 * Note: In a production environment, authentication must be handled server-side.
 * This script is for demonstration/mock purposes only.
 */
function handleLogin() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!emailInput || !passwordInput) {
        console.error('Login fields not found in the DOM.');
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || password === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Implement actual login handling, such as sending a request to a server-side API
    console.log('Attempting login for:', email);

    // For demonstration purposes only, simulate a successful login
    if (email === 'example@example.com' && password === 'password123') {
        localStorage.setItem('user_session', JSON.stringify({ email: email, loggedIn: true }));
        alert('Login successful!');
    } else {
        alert('Invalid email or password. Please try again.');
        passwordInput.value = '';
    }
}

/**
 * Retrieves the current user session from local storage.
 * @returns {Object|null} The user session object or null if no session is found.
 */
function debugUser() {
    const session = localStorage.getItem('user_session');
    if (!session) {
        console.log('No active session found.');
        return null;
    }
    return JSON.parse(session);
}

// Example usage:
// window.onload = function() {
//     const loginButton = document.getElementById('login-button');
//     loginButton.addEventListener('click', handleLogin);
// };