// Show the notification bar
function showNotification() {
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.style.display = 'flex';
    notificationBar.style.bottom = '0'; // Slide it into view
}

// Hide the notification bar
function hideNotification() {
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.style.bottom = '-100px'; // Slide it out of view
}

// Attach event listener to the button
document.getElementById('close-notification').addEventListener('click', hideNotification);

// Automatically show the notification bar after 1 second
window.onload = showNotification;