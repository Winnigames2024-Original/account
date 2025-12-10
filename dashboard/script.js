const UserName = document.getElementById("username");



// Functions
function InitalizeDashboard() {
  const CurrentUserName = getCookie("username");
  UserName.Text = CurrentUserName;
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
