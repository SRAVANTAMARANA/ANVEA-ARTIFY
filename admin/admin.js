// admin.js - Admin login, dashboard protection, logout

document.addEventListener('DOMContentLoaded', function () {
    // Firebase Auth logic placeholder (replace with real Firebase Auth)
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    if (loginForm) {
        loginForm.onsubmit = function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // Replace with Firebase Auth
            if (email === 'admin@example.com' && password === 'password') {
                localStorage.setItem('adminLoggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                loginError.textContent = 'Invalid credentials.';
            }
        };
    }
    // Dashboard protection
    if (window.location.pathname.endsWith('dashboard.html')) {
        if (localStorage.getItem('adminLoggedIn') !== 'true') {
            window.location.href = 'login.html';
        }
        document.getElementById('logout-btn').onclick = function () {
            localStorage.removeItem('adminLoggedIn');
            window.location.href = 'login.html';
        };
    }
});
