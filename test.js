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

    // Security: Never log plain-text passwords to the console
    console.log('Attempting login for:', email);

    // FIX: Use strict equality (===) for comparison
    // In a real app, this would be an API call to a backend
    if (password === 'secret123') {
        alert('Login successful! Welcome back, ' + email);
        
        // Security: Store only necessary, non-sensitive metadata.
        // Never store plain-text passwords in localStorage.
        const sessionData = {
            user: email,
            loginTimestamp: new Date().toISOString()
        };
        
        localStorage.setItem('user_session', JSON.stringify(sessionData));
        
        // Redirect to protected route
        window.location.href = '/dashboard';
    } else {
        // Provide a generic error message for security
        alert('Invalid email or password. Please try again.');
        passwordInput.value = ''; // Clear password field on failure
    }
}

/**
 * Debug helper to verify session state
 */
window.debugUser = () => {
    const session = localStorage.getItem('user_session');
    if (!session) {
        console.log('No active session found.');
        return null;
    }
    return JSON.parse(session);
};