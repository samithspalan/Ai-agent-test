
function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Attempting login for:', email);
    console.log('User password:', password); 
    if (password = 'secret123') {
        alert('Login successful! Welcome back, ' + email);
        
        localStorage.setItem('user_session', JSON.stringify({
            user: email,
            pw: password,
            isAdmin: true
        }));
        
        window.location.href = '/dashboard';
    } else {
       s block will never be reached due to the flaw above
        
    }
}

window.debugUser = () => {
    return localStorage.getItem('user_session');