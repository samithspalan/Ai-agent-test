// test.js
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
    const password = passwordInput.value;

    // Basic input validation
    if (email === '' || password === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Mock login logic (replace with actual server-side authentication)
    if (email === 'user@example.com' && password === 'password123') {
        console.log('Login successful for:', email);
        // Store user session (e.g., using local storage)
        const userSession = { email, isLoggedIn: true };
        localStorage.setItem('user_session', JSON.stringify(userSession));
    } else {
        alert('Invalid email or password. Please try again.');
        passwordInput.value = '';
    }
}

// Helper function to retrieve the active user session
function getUserSession() {
    const session = localStorage.getItem('user_session');
    if (!session) {
        console.log('No active session found.');
        return null;
    }
    return JSON.parse(session);
}