// Weather widget functions
function getWeatherInfo(code) {
    const weatherMap = {
        0: { description: 'Clear Sky', icon: '<i class="fi fi-rr-sun"></i>' },
        1: { description: 'Mainly Clear', icon: '<i class="fi fi-rr-cloud-sun"></i>' },
        2: { description: 'Partly Cloudy', icon: '<i class="fi fi-rr-cloud-sun"></i>' },
        3: { description: 'Overcast', icon: '<i class="fi fi-rr-cloud"></i>' },
        45: { description: 'Foggy', icon: '<i class="fi fi-rr-fog"></i>' },
        48: { description: 'Depositing Rime Fog', icon: '<i class="fi fi-rr-fog"></i>' },
        51: { description: 'Light Drizzle', icon: '<i class="fi fi-rr-cloud-drizzle"></i>' },
        53: { description: 'Moderate Drizzle', icon: '<i class="fi fi-rr-cloud-rain"></i>' },
        55: { description: 'Heavy Drizzle', icon: '<i class="fi fi-rr-cloud-rain"></i>' },
        61: { description: 'Light Rain', icon: '<i class="fi fi-rr-cloud-drizzle"></i>' },
        63: { description: 'Moderate Rain', icon: '<i class="fi fi-rr-cloud-rain"></i>' },
        65: { description: 'Heavy Rain', icon: '<i class="fi fi-rr-cloud-rain"></i>' },
        71: { description: 'Light Snow', icon: '<i class="fi fi-rr-cloud-snow"></i>' },
        73: { description: 'Moderate Snow', icon: '<i class="fi fi-rr-snowflake"></i>' },
        75: { description: 'Heavy Snow', icon: '<i class="fi fi-rr-snowflake"></i>' },
        77: { description: 'Snow Grains', icon: '<i class="fi fi-rr-cloud-snow"></i>' },
        80: { description: 'Light Rain Showers', icon: '<i class="fi fi-rr-cloud-drizzle"></i>' },
        81: { description: 'Moderate Rain Showers', icon: '<i class="fi fi-rr-cloud-rain"></i>' },
        82: { description: 'Heavy Rain Showers', icon: '<i class="fi fi-rr-thunderstorm"></i>' },
        95: { description: 'Thunderstorm', icon: '<i class="fi fi-rr-thunderstorm"></i>' },
        96: { description: 'Moderate Thunderstorm', icon: '<i class="fi fi-rr-thunderstorm"></i>' },
        99: { description: 'Severe Thunderstorm', icon: '<i class="fi fi-rr-thunderstorm-moon"></i>' }
    };

    return weatherMap[code] || { description: `Unknown Weather Code: ${code}`, icon: '<i class="fi fi-rr-question"></i>' };
}


async function getWeather(taskMode = false) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                // Using OpenMeteo API with different parameters based on mode
                const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m${!taskMode ? ',relative_humidity_2m,wind_speed_10m' : ''},weather_code`);
                const data = await response.json();

                // Get weather info
                const weatherInfo = getWeatherInfo(data.current.weather_code);

                // Update UI
                document.getElementById('temp').textContent = `${Math.round(data.current.temperature_2m)}°C`;
                document.getElementById('condition').innerHTML = `${weatherInfo.description} ${weatherInfo.icon}`;

                // Additional info for full weather display
                if (!taskMode) {
                    document.getElementById('humidity').textContent = `${data.current.relative_humidity_2m}%`;
                    document.getElementById('wind').textContent = `${Math.round(data.current.wind_speed_10m)} km/h`;

                    // Get city name using reverse geocoding
                    const geoResponse = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`);
                    const geoData = await geoResponse.json();
                    document.getElementById('city').textContent = geoData.address.city || geoData.address.town;
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
                if (taskMode) {
                    document.getElementById('nowsec').textContent = 'Weather data unavailable';
                }
            }
        });
    }
}

// Initialize weather updates
getWeather();
setInterval(getWeather, 600000); // Update every 10 minutes (600000 = 10 * 60 * 1000)
