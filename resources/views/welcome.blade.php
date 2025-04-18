<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TaskFlow | Tasks</title>
    <link rel="icon" type="image/png" href="{{ asset('/favicon.png') }}">

    <!-- FlatIcon CDN -->
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-rounded/css/uicons-thin-rounded.css'>

    @vite(['resources/css/app.css', 'resources/css/welcome.css', 'resources/js/app.js'])
</head>

<body>
    <section class="welcome">
        <div class="container">
            <h1>Task<span>Flow</span></h1>
            <p class="">Your Flow, Your Success</p>

            <div class="buttons">
                <a href="{{ url('/home') }}" class="login">Login</a>
                <a href="{{ url('/home') }}" class="signup">Sign Up</a>
            </div>
        </div>
    </section>
</body>

</html>
