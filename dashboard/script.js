const urlPaframs = new URLSearchParams(window.location.search);
const user = urlPaframs.get('account');
const password = urlPaframs.get('password');
const UserName = document.getElementById("h2Username");

// Winnigames2024 Account
const validUsername = 'Winnigames2024';
const validPassword = 'kodiki8909';
const lWinnigames2024VisibleUsername = "Winnigames2024-Original %(*OWNER*)%";
// Winnigames2024 Test Account
const validTestUsername = 'Winnigames2024Test';
const validTestPassword = 'test';
const TestAccountVisibleUsername = 'Unauthorized Users';
// Liliya Account
const validLiliyaUsername = 'LiliyaIO';
const validLiliyaPassword = 'tLBGlbg';
const LiliyaIOVisibleUsername = 'Liliya Lonskaya %(*MODERATOR*)%';

if (user) {
  // Winnigames2024 Account Checker
  if (user == validUsername) {
    if (password) {
      if (password == validPassword) {
        UserName.textContent = Winnigames2024VisibleUsername;
      }
    }
    else {
       UserName.textContent = Winnigames2024VisibleUsername;
    }
  }
  // Winnigames2024 Test Account Checker
  if (user == validTestUsername) {
    if (password) {
      if (password == validTestPassword) {
        UserName.textContent = TestAccountVisibleUsername;
      }
    }
    else {
       UserName.textContent = TestAccountVisibleUsername;
    }
  }
  // LiliyaIO Account Checker
  if (user == validLiliyaUsername) {
    if (password) {
      if (password == validLiliyaPassword) {
        UserName.textContent = LiliyaIOVisibleUsername;
      }
    }
    else {
       UserName.textContent = LiliyaIOVisibleUsername;
    }
  }
}




function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';'); // Split the document.cookie string into an array of individual cookie strings
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') { // Remove leading whitespace from the cookie string
      c = c.substring(1);
    }
    if (c.indexOf(nameEQ) === 0) { // Check if the cookie string starts with the desired name
      return c.substring(nameEQ.length, c.length); // Extract and return the cookie's value
    }
  }
  return ""; // Return an empty string if the cookie is not found
}


function setCookie(name, value, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Calculate expiration date
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + value + ";" + expires + ";path=./account";
}
