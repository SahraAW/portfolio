// Get the button and body elements
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Add an event listener for the button click
themeToggleBtn.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');

    // Check if dark mode is active and change the button text accordingly
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode'; // Change button text to 'Light Mode'
    } else {
        themeToggleBtn.textContent = 'Dark Mode'; // Change button text to 'Dark Mode'
    }
});
