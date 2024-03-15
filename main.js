// Function to toggle the visibility of the navigation links
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links ul li');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close the menu when a navigation link is clicked
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});