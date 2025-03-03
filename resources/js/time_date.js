// CLOCK FUNCTION
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

    // Ensure elements exist before updating them
    const hourEl = document.querySelector('.clock .hour');
    const minuteEl = document.querySelector('.clock .minute');
    const secondEl = document.querySelector('.clock .secs');
    const timeEl = document.querySelector('.clock .time');

    if (hourEl && minuteEl && secondEl && timeEl) {
        hourEl.textContent = displayHours;
        minuteEl.textContent = displayMinutes;
        secondEl.textContent = displaySeconds;
        timeEl.textContent = ampm;
    }
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// CALENDAR FUNCTION
function updateCalendar() {
    const today = new Date(); // Use a local variable for today
    let currentDate = new Date(today.getFullYear(), today.getMonth(), 1); // Reset to the first day

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Check if elements exist
    const monthDisplay = document.getElementById('currentMonth');
    const calendarDays = document.getElementById('calendarDays');

    if (!monthDisplay || !calendarDays) return; // Exit if elements are missing

    // Update month display
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    monthDisplay.textContent = `${monthNames[month]} ${year}`;

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
        const isToday = i === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

        days.push(`<div class="p-2 text-center ${isToday ?
            'bg-blue-500 text-white' : 'hover:bg-gray-100'} rounded-[15px]">
            ${i}</div>`);
    }

    calendarDays.innerHTML = days.join('');
}

// Ensure event listeners are only added if elements exist
document.addEventListener("DOMContentLoaded", function () {
    updateCalendar();

    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendar();
        });

        nextBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendar();
        });
    }
});
