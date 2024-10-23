"use strict";

const links = document.querySelectorAll(".newpage");
links.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});
