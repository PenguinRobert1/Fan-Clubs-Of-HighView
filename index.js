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
document.addEventListener('DOMContentLoaded', () => {
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.style.display = 'flex';
    notificationBar.style.bottom = '0'; // Slide it into view
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

    (function() {
      const mainElement = document.getElementById('main');
      mainElement.style.position = 'absolute';
      mainElement.style.top = '7px';
      mainElement.style.left = '10px';
    })();