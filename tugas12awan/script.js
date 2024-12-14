let balance = 0;
let loggedIn = false;

function updateBalance() {
  document.getElementById("balance").textContent = `$${balance}`;
}

function login() {
  const inputPin = document.getElementById("pin").value;
  const errorMessage = document.getElementById("error-message");

  // Check if PIN length is exactly 6 digits
  if (inputPin.length !== 6 || isNaN(inputPin)) {
    errorMessage.textContent = "PIN must be exactly 6 digits!";
    return;
  }

  loggedIn = true;
  errorMessage.textContent = ""; // Clear any error message
  alert("Login successful!");

  // Hide login screen and show main ATM menu
  document.getElementById("login-container").style.display = "none";
  document.getElementById("atm-container").style.display = "block";
}

function logout() {
  loggedIn = false;
  // Show login screen and hide ATM menu
  document.getElementById("login-container").style.display = "block";
  document.getElementById("atm-container").style.display = "none";

  // Reset input fields and disable buttons
  document.getElementById("pin").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("deposit-btn").disabled = true;
  document.getElementById("withdraw-btn").disabled = true;
  alert("Logged out successfully!");
}

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  balance += amount;
  updateBalance();
  document.getElementById("amount").value = "";
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  if (amount > balance) {
    alert("Insufficient balance!");
    return;
  }
  balance -= amount;
  updateBalance();
  document.getElementById("amount").value = "";
}
