
function handleLogin() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!emailInput || !passwordInput) {
        console.error('Login fields not found in the DOM.');
  

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Invalid email address.');
        return;
    }

    console.log('Attempting login for:', email);

    passwordInput.value = '';
    console.log('Login successful for:', email);

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