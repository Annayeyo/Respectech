"use strict";

// Function to handle link clicks
document.querySelectorAll(".newpage").forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent the default link action
    event.preventDefault();

    // Show an alert with the link's href
    alert(`You clicked on: ${this.getAttribute("href")}`);

    setTimeout(() => {
      window.location.href = this.getAttribute("href");
    }, 1000);
  });
});
