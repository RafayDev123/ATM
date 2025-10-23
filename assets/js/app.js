let balance = 1000;
const correctPin = "3332";

document.getElementById("enter-btn").addEventListener("click", function() {
  const pin = document.getElementById("pin").value;
  const screen = document.getElementById("screen");

  if (pin === correctPin) {
    screen.innerHTML = `
      <h3>Welcome!</h3>
      <button onclick="checkBalance()">Check Balance</button>
      <button onclick="deposit()">Deposit</button>
      <button onclick="withdraw()">Withdraw</button>
      <button onclick="logout()">Exit</button>
    `;
  } else {
    document.getElementById("message").textContent = "Incorrect PIN! Try again.";
  }
});

function checkBalance() {
  alert(`Your current balance is $${balance}`);
}

function deposit() {
  let amount = +prompt("Enter amount to deposit:");
  if (amount > 0) {
    balance += amount;
    alert(`Deposited $${amount}. New balance: $${balance}`);
  } else {
    alert("Invalid amount!");
  }
}

function withdraw() {
  let amount = +prompt("Enter amount to withdraw:");
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    alert(`Withdrawn $${amount}. Remaining balance: $${balance}`);
  } else {
    alert("Insufficient funds or invalid amount!");
  }
}

function logout() {
  location.reload();
}
