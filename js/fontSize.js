let currentFontSize = 100; // Percentage

function increaseFontSize() {
    if (currentFontSize < 150) { // Prevent excessively large sizes
        currentFontSize += 10;
        document.body.style.fontSize = currentFontSize + '%';
        document.body.h1.fontSize = currentFontSize + '%';
        document.body.h3.fontSize = currentFontSize + '%';
    }
}

function decreaseFontSize() {
    if (currentFontSize > 70) { // Prevent excessively small sizes
        currentFontSize -= 10;
        document.body.style.fontSize = currentFontSize + '%';
    }
}

document.getElementById('increaseFont').addEventListener('click', increaseFontSize);
document.getElementById('decreaseFont').addEventListener('click', decreaseFontSize);


// sidebar FontSize
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.nav.sidebar');
    let isSidebarVisible = true;

    function toggleSidebarVisibility() {
        if (window.innerWidth <= 768) {
            sidebar.style.transform = 'translateX(100%)';
            isSidebarVisible = false;
        } else {
            sidebar.style.transform = 'translateX(0)';
            isSidebarVisible = true;
        }
    }

    // Run on initial load
    toggleSidebarVisibility();

    // Attach to window resize event
    window.addEventListener('resize', toggleSidebarVisibility);
});
