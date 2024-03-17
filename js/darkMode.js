document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Function to update button text
    function updateButtonText() {
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Switch to Light Mode';
        } else {
            darkModeToggle.textContent = 'Switch to Dark Mode';
        }
    }

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Update the button text after toggling
        updateButtonText();

        // Optionally save the dark mode state in localStorage and retrieve it on page load
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check if dark mode was enabled previously and update button text accordingly
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    updateButtonText(); // Ensure the button text is correct on page load
});
