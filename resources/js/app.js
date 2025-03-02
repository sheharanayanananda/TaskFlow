import './bootstrap';
import './time_date';
import './weather';

function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.querySelector('.greeting');

    let greetingText = '';
    //let emoji = '';

    if (hour >= 5 && hour < 12) {
        greetingText = 'Good Morning!';
        //emoji = '🌅';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Good Afternoon!';
        //emoji = '☀️';
    } else if (hour >= 18 && hour < 22) {
        greetingText = 'Good Evening!';
        //emoji = '🌆';
    } else {
        greetingText = 'Good Night!';
        //emoji = '🌙';
    }

    greeting.innerHTML = `${greetingText}`;
    /*greeting.innerHTML = `${greetingText} ${emoji}`;*/
}

updateGreeting(); // Initial call
