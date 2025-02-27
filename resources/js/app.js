import './bootstrap';

//greeting msg
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

//Digital Clock
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

//Weather widget
async function getWeather() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            try {
                // Using OpenMeteo API (free, no API key required)
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`);
                const data = await response.json();
                
                // Update UI
                document.getElementById('temp').textContent = `${Math.round(data.current.temperature_2m)}°C`;
                document.getElementById('humidity').textContent = `${data.current.relative_humidity_2m}%`;
                document.getElementById('wind').textContent = `${Math.round(data.current.wind_speed_10m)} km/h`;
                
                // Get city name using reverse geocoding
                const geoResponse = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`);
                const geoData = await geoResponse.json();
                document.getElementById('city').textContent = geoData.address.city || geoData.address.town;
                
                // Set weather condition based on code
                const weatherCode = data.current.weather_code;
                document.getElementById('condition').textContent = getWeatherCondition(weatherCode);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        });
    }
}

function getWeatherCondition(code) {
    // Simplified weather code mapping
    if (code === 0) return 'Clear';
    if (code <= 3) return 'Partly Cloudy';
    if (code <= 48) return 'Foggy';
    if (code <= 67) return 'Rainy';
    if (code <= 77) return 'Snowy';
    if (code <= 82) return 'Rain Showers';
    if (code <= 86) return 'Snow Showers';
    return 'Thunderstorm';
}

// Update weather every 30 minutes
getWeather();
setInterval(getWeather, 1800000);