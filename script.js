// Get all the links in the navbar
var navLinks = document.querySelectorAll("header nav a");

// Iterate through the links and add a click event listener to each one
navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var sectionId = this.getAttribute("href");
    var section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
