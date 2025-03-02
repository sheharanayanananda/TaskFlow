//clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    // Add leading zeros
    const displayHours = hours.toString().padStart(2, '0');
    const displayMinutes = minutes.toString().padStart(2, '0');
    const displaySeconds = seconds.toString().padStart(2, '0');

    // Update the clock elements
    document.querySelector('.clock .hour').textContent = displayHours;
    document.querySelector('.clock .minute').textContent = displayMinutes;
    document.querySelector('.clock .secs').textContent = displaySeconds;
    document.querySelector('.clock .time').textContent = ampm;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

//Calandar
let currentDate = new Date();

function updateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Update month display
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;

    // Calculate days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevMonthLastDay = new Date(year, month, 0);

    let days = [];

    // Previous month days
    for (let i = firstDay.getDay(); i > 0; i--) {
        days.push(`<div class="p-2 text-center text-gray-400">
            ${prevMonthLastDay.getDate() - i + 1}</div>`);
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const today = new Date();
        const isToday = i === today.getDate() &&
                      month === today.getMonth() &&
                      year === today.getFullYear();

        days.push(`<div class="p-2 text-center ${isToday ?
            'bg-blue-500 text-white' : 'hover:bg-gray-100'} rounded-[15px]">
            ${i}</div>`);
    }

    document.getElementById('calendarDays').innerHTML = days.join('');
}

// Event listeners for navigation
document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Initial calendar render
updateCalendar();
