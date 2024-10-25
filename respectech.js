"use strict";

// Function to handle link clicks with smooth transition
document.querySelectorAll(".newpage").forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent the default link action
    event.preventDefault();

    // Show an alert with the link's href
    alert(`You clicked on: ${this.getAttribute("href")}`);

    // Fade out effect before navigating
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      // Update content dynamically or redirect
      fetch(this.getAttribute("href"))
        .then(response => response.text())
        .then(data => {
          // Option to dynamically update page content
          document.body.innerHTML = data;
          document.body.style.opacity = "1"; // Fade back in
        })
        .catch(() => {
          // If dynamic update fails, redirect to the link
          window.location.href = this.getAttribute("href");
        });
    }, 1000);
  });
});
