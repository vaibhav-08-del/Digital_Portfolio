                // Get elements
const hoverText = document.querySelector('.hover-text');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

// Show popup when hovering over the text
hoverText.addEventListener('mouseover', function() {
    popup.style.display = 'block';
});

// Close popup when clicking the close button
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Optional: Close popup if clicked outside the popup
window.addEventListener('click', function(event) {
    if (!popup.contains(event.target) && event.target !== hoverText) {
        popup.style.display = 'none';
    }
});