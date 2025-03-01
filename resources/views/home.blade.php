<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TaskFlow | Home</title>
    <link rel="icon" type="image/png" href="{{ asset('/favicon.png') }}">

    <!-- FlatIcon CDN -->
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-rounded/css/uicons-thin-rounded.css'>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="body">
    <nav class="sidebar">
        <div class="header">
            <h1 class="logo">Task<span>Flow</span></h1>
        </div>

        <div class="seperator"></div>

        <div class="tabs">
            <a href="{{ url('/home') }}"><i class="fi fi-rr-house-blank"></i>Home</a>
            <a href="{{ url('/tasks') }}"><i class="fi fi-rr-notes"></i>Tasks</a>
            <a href=""><i class="fi fi-rr-calendar-clock"></i>Schedule</a>
            <a href=""><i class="fi fi-rr-settings"></i>Settings</a>
        </div>

        <div class="seperator"></div>

        <div class="user">
            <div class="credentials">
                <h2>Username</h2>
                <p>username@gmail.com</p>
            </div>
            <a href="" class="logout"><i class="fi fi-rr-exit"></i></a>
        </div>
    </nav>

    <section class="dashboard">
        <div class="left">
            <header>
                <h1 class="greeting"></h1>
                <div class="search">
                    <input type="text" placeholder="Search for tasks...">
                    <button><i class="fi fi-rr-search"></i></button>
                </div>
            </header>

            <div class="brief">
                <div class="task">
                    <i class="fi fi-rr-notes"></i>
                    <p>20</p>
                    <h2>Tasks</h2>
                </div>
                <div class="task">
                    <i class="fi fi-rr-check-circle"></i>
                    <p>12</p>
                    <h2>Completed</h2>
                </div>
                <div class="task">
                    <i class="fi fi-rr-circle-xmark"></i>
                    <p>2</p>
                    <h2>Failed</h2>
                </div>
                <div class="task">
                    <i class="fi fi-rr-time-forward"></i>
                    <p>60</p>
                    <h2>Upcoming</h2>
                </div>
            </div>

            <div class="today">
                <div class="top">
                    <h2>Today's Brief</h2>
                    <a href="" class="view"><i class="fi fi-rr-up-right-from-square"></i></a>
                </div>
                <div class="bottom">
                    <div class="task-container">
                        <div class="task">
                            <div class="header">
                                <h1>Watering Plants</h1>
                                <button><i class="fi fi-br-menu-dots-vertical"></i></button>
                            </div>
                            <p>10.00 AM - 12.00 PM</p>
                            <p class="desc">
                                Water plants and disconnect the horse.
                                Check seeds and add fertilizers.
                                Feed the plants with water.
                            </p>
                            <div class="marker"></div>
                        </div>
                        <div class="task">
                            <div class="header">
                                <h1>Watering Plants</h1>
                                <button><i class="fi fi-br-menu-dots-vertical"></i></button>
                            </div>
                            <p>10.00 AM - 12.00 PM</p>
                            <p class="desc">
                                Water plants and disconnect the horse.
                                Check seeds and add fertilizers.
                                Feed the plants with water.
                            </p>
                            <div class="marker"></div>
                        </div>
                        <div class="task">
                            <div class="header">
                                <h1>Watering Plants</h1>
                                <button><i class="fi fi-br-menu-dots-vertical"></i></button>
                            </div>
                            <p>10.00 AM - 12.00 PM</p>
                            <p class="desc">
                                Water plants and disconnect the horse.
                                Check seeds and add fertilizers.
                                Feed the plants with water.
                            </p>
                            <div class="marker"></div>
                        </div>
                        <div class="task">
                            <div class="header">
                                <h1>Watering Plants</h1>
                                <button><i class="fi fi-br-menu-dots-vertical"></i></button>
                            </div>
                            <p>10.00 AM - 12.00 PM</p>
                            <p class="desc">
                                Water plants and disconnect the horse.
                                Check seeds and add fertilizers.
                                Feed the plants with water.
                            </p>
                            <div class="marker"></div>
                        </div>
                    </div>
                    <div class="schedule-container">
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                        <div class="schedule">
                            <p>Watering Plants</p>
                            <p>In 2h 15min</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="clock-container">
                <div class="clock">
                    <p class="hour"></p>
                    <p class="seperator">:</p>
                    <p class="minute"></p>
                    <p class="seperator">:</p>
                    <p class="secs"></p>
                    <p class="seperator">|</p>
                    <p class="time"></p>
                </div>
            </div>
            <div class="calendar-container">
                <div class="calendar">
                    <div class="calendar-header">
                        <h2 class="calendar-title" id="currentMonth">Calendar</h2>
                        <div class="calendar-nav">
                            <button class="calendar-nav-btn" id="prevMonth">
                                <i class="fi fi-rr-angle-left"></i>
                            </button>
                            <button class="calendar-nav-btn" id="nextMonth">
                                <i class="fi fi-rr-angle-right"></i>
                            </button>
                        </div>
                    </div>

                    <div class="calendar-grid">
                        <span class="calendar-day-label">Su</span>
                        <span class="calendar-day-label">Mo</span>
                        <span class="calendar-day-label">Tu</span>
                        <span class="calendar-day-label">We</span>
                        <span class="calendar-day-label">Th</span>
                        <span class="calendar-day-label">Fr</span>
                        <span class="calendar-day-label">Sa</span>
                    </div>

                    <div class="calendar-grid" id="calendarDays">
                        <!-- Days will be dynamically inserted here -->
                    </div>
                </div>

                <div class="weather">
                    <div class="weather-header">
                        <h2>Weather</h2>
                        <p class="location"><i class="fi fi-rr-marker"></i> <span id="city">City</span></p>
                    </div>
                    <div class="weather-info">
                        <div class="temperature">
                            <h1 id="temp">°C</h1>
                            <p id="condition"></p>
                        </div>
                        <div class="details">
                            <div class="detail">
                                <i class="fi fi-rr-humidity"></i>
                                <p>Humidity</p>
                                <p id="humidity">%</p>
                            </div>
                            <div class="detail">
                                <i class="fi fi-rr-wind"></i>
                                <p>Wind</p>
                                <p id="wind">km/h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
