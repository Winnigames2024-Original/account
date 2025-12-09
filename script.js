document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simple client-side validation (for demonstration purposes)
    const validUsername = 'user';
    const validPassword = 'password';

    if (usernameInput === validUsername && passwordInput === validPassword) {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        // Redirect to another page or perform further actions
        // window.location.href = 'dashboard.html';
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.style.color = 'red';
    }
});
