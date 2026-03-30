/**
 * Handles the login form submission.
 * Note: In a production environment, authentication must be handled server-side.
 * This script is for demonstration/mock purposes only.
 */
function validateForm(emailInput, passwordInput) {
    // Reset error messages
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    emailError.textContent = '';
    passwordError.textContent = '';

    // Get input values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check for empty input fields
    if (email === '') {
        emailError.textContent = 'Email address is required.';
        return false;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required.';
        return false;
    }

    // Basic email validation
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.textContent = 'Invalid email address.';
        return false;
    }

    // Basic password validation (minimum 8 characters, at least one lowercase, one uppercase, one number, and one special character)
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        passwordError.textContent = 'Invalid password. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.';
        return false;
    }

    return true;
}

function attemptLogin(email) {
    // Simulate authentication (in a real application, you would send a request to the server to authenticate the user)
    console.log('Attempting login for:', email);
    // For demo purposes, assume the login is always successful
    console.log('Login successful for:', email);

    // Store user session data (not secure for production use)
    try {
        localStorage.setItem('user_session', JSON.stringify({ email: email }));
    } catch (error) {
        console.error('Error storing user session data:', error);
        // Provide an alternative or notify the user
        alert('Failed to store your session. Please try again later.');
    }
}

function handlePostLogin(passwordInput) {
    // Clear password input value with user confirmation
    if (confirm('Do you want to clear the password field?')) {
        passwordInput.value = '';
    }
    alert('You are now logged in.');
}

function handleLogin(event) {
    event.preventDefault();

    // Get input elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Check if input elements exist
    if (!emailInput || !passwordInput) {
        console.error('Login fields not found in the DOM.');
        return;
    }

    if (validateForm(emailInput, passwordInput)) {
        const email = emailInput.value.trim();
        attemptLogin(email);
        handlePostLogin(passwordInput);
    }
}

// Call handleLogin function when login form is submitted
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', handleLogin);
});