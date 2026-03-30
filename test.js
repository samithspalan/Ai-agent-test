/**
 * Handles the login form submission.
 * Note: In a production environment, authentication must be handled server-side.
 * This script is for demonstration/mock purposes only.
 */
function handleLogin() {
    // Get input elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Check if input elements exist
    if (!emailInput || !passwordInput || !emailError || !passwordError) {
        console.error('Login fields or error messages not found in the DOM.');
        return;
    }

    // Get input values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    // Check for empty input fields
    if (email === '') {
        emailError.textContent = 'Email address is required.';
        return;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required.';
        return;
    }

    // Basic email validation
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.textContent = 'Invalid email address.';
        return;
    }

    // Basic password validation (minimum 8 characters, at least one lowercase, one uppercase, one number, and one special character)
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        passwordError.textContent = 'Invalid password. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.';
        return;
    }

    // Attempt login
    console.log('Attempting login for:', email);

    // Simulate authentication (in a real application, you would send a request to the server to authenticate the user)
    console.log('Login successful for:', email);

    // Store user session data in local storage (not secure for production use)
    try {
        localStorage.setItem('user_session', JSON.stringify({ email: email }));
    } catch (error) {
        console.error('Error storing user session data:', error);
    }

    // Clear password input value with user confirmation
    if (confirm('Do you want to clear the password field?')) {
        passwordInput.value = '';
    }
}

// Call handleLogin function when login form is submitted
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handleLogin();
    });
});