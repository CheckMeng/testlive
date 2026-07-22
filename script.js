"use strict"

// script.js

// Function to update the time display
function updateTime() {
    const now = new Date(); // Get the current date and time
    const formatted = now.toLocaleTimeString(); // Format the time as a string
    document.getElementById("timeDisplay").textContent = formatted; // Update the DOM
  }
  
  // Run updateTime every second (1000ms)
  setInterval(updateTime, 1000);
  
  // Call updateTime once immediately to avoid delay on page load
  updateTime();

  
// Variation - Countdown Timer script.js
// Set the target date and time for the countdown (e.g., New Year's Day)
const targetDate = new Date("January 1, 2024 00:00:00").getTime();

// Function to update the countdown display
function updateCountdown() {
  const now = new Date().getTime(); // Get the current time in milliseconds
  const timeLeft = targetDate - now; // Calculate the difference in milliseconds

  // Convert milliseconds into days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Format the countdown string
  const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Update the DOM
  document.getElementById("timeDisplay").textContent = countdownText;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("timeDisplay").textContent = "Happy New Year!";
  }
}

// Run updateCountdown every second (1000ms)
const interval = setInterval(updateCountdown, 1000);

// Call updateCountdown once immediately to avoid delay on page load
updateCountdown();