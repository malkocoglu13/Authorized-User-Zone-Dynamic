// views/js/redirect.js

// JavaScript code to handle form submission and redirection
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = document.getElementById("password").value;

  // Make an asynchronous POST request to your server
  const response = await fetch("/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `password=${encodeURIComponent(password)}`,
  });

  if (response.status === 200) {
    // If the response status is 200, the login attempt was successful.
    window.location.href = "./secret.html"; // Redirect to secret.html
  } else {
    // If the response status is not 200, display the error message.
    errorMessage.style.display = "block";
  }
});
