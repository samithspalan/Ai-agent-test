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

    console.log('Attempting login for:', email);
 else {
        alert('Invalid email or password. Please try again.');
        passwordInput.value = ''; 
    }
}

window.debugUser = () => {
    const session = localStorage.getItem('user_session');
    if (!session) {
        console.log('No active session found.');
        return null;
    }
    return JSON.parse(session);
};