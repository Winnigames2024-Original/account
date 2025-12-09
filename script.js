document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const validUsername = 'Winnigames2024';
    const validPassword = 'admin';

    if (usernameInput === validUsername && passwordInput === validPassword) {
        messageElement.textContent = 'Login successful! You need to log in again in 30 days!!!';
        messageElement.style.color = 'green';
        // Redirect to another page or perform further actions
        setAccountCookie("username", usernameInput, 30);
        setAccountCookie("password", passwordInput, 30);
        window.location.href = '/dashboard/';
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.style.color = 'red';
    }
});

function setCookie(name, value, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Calculate expiration date
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + value + ";" + expires + ";path=/";
}
