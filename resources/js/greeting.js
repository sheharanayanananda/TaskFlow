function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.querySelector('.greeting');

    if (!greeting) return; // Prevent errors if the element is missing

    let greetingText = '';

    if (hour >= 5 && hour < 12) {
        greetingText = 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Good Afternoon!';
    } else if (hour >= 18 && hour < 22) {
        greetingText = 'Good Evening!';
    } else {
        greetingText = 'Good Night!';
    }

    greeting.textContent = greetingText;
}

// Ensure the script runs after the DOM has loaded
document.addEventListener("DOMContentLoaded", updateGreeting);
