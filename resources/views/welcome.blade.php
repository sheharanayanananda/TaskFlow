<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TaskFlow | Welcome</title>
    <link rel="icon" type="image/png" href="{{ asset('/favicon.png') }}">
    @vite(['resources/css/app.css', 'resources/js/app.js', 'https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'])
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