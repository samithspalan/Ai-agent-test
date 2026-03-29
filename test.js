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

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    // Basic email validation
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Invalid email address.');
        return;
    }

    console.log('Attempting login for:', email);

    // Clear password input value for security
    passwordInput.value = '';

    // In a real application, you would send a request to the server to authenticate the user
    // For demonstration purposes, we'll just log the email to the console
    console.log('Login successful for:', email);

    // Store user session data in local storage (not secure for production use)
    localStorage.setItem('user_session', JSON.stringify({ email: email }));
}

window.debugUser = () => {
    const session = localStorage.getItem('user_session');
    if (!session) {
        console.log('No active session found.');
        return null;
    }
    return JSON.parse(session);
};